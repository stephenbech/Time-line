import Image from 'next/legacy/image';
import React, { useRef, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import {EmojiHappyIcon} from "@heroicons/react/outline";
import {CameraIcon, VideoCameraIcon} from "@heroicons/react/solid";
import { db, firebase } from '../firebase';
import { addDoc, collection, serverTimestamp, doc, id, documentId, setDoc, FieldValue} from 'firebase/firestore';
import { getStorage, ref, uploadString, getDownloadURL} from 'firebase/storage';


function InputBox() {
      const { data: session } = useSession()
      const inputRef = useRef(null);
      const filepickerRef = useRef(null);
      const [imageToPost, setImageToPost] = useState(null);
      const storage = getStorage();
      
      const sendPost = (e) => {
            e.preventDefault();

            if(!inputRef.current.value) return;
            
            addDoc(collection(db, "posts",),{
                  message: inputRef.current.value,
                  name: session.user.name,
                  email: session.user.email,
                  image: session.user.image,
                  timestamp: serverTimestamp()
            }).then( (response) => {
            const uploadTaskRef = ref(storage, `posts/${response.id}`, )
                if (imageToPost) {
                        
                        uploadString(uploadTaskRef, imageToPost, 'data_url', ).then((snapshot) => {
                              getDownloadURL(snapshot.ref).then( async (url) => {
                                    console.log(url)
                                    await setDoc(doc (db, `posts`, response.id), {postImage: url }, {merge: true})
                              })
                              console.log('Uploaded a data_url string!');

                        });

                        removeImage();
                  }  
            })

            inputRef.current.value= '';
      };

      const  addImageToPost = (e) =>{
            const reader = new FileReader();
            if (e.target.files[0]) {
                  reader.readAsDataURL(e.target.files[0])
            }

            reader.onload = (readerEvent) =>{
                  setImageToPost(readerEvent.target.result)
            }
      }

      const removeImage = () => {
            setImageToPost();
      }

  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6' >
      <div className='flex space-x-4 p-4 items-center' >
           <Image
                  src={session.user.image} 
                  className="rounded-full cursor-pointer"
                  width={40} 
                  height={40} 
                  layout="fixed" 
           />
            <form className='flex flex-1' >
                  <input 
                        className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
                        type="text" 
                        ref={inputRef}
                        placeholder={`What's on your mind, ${session.user.name}?`} 
                  />
                  <button hidden type='sumbit' onClick={sendPost} >
                        Post
                  </button>
            </form> 

            {imageToPost && (
                  <div className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale105 cursor-pointer " >
                        <img className='h-10 object-contain' src={imageToPost} alt="test" />
                        <p onClick={removeImage} className='text-xs text-red-500 text-center  ' >Remove</p>
                  </div>
            )}
      </div>

      <div className='flex justify-evenly p-3 border-t'>
            <div className='inputIcon' >
                  <VideoCameraIcon className='h-7 text-red-500' />
                  <p className='text-xs sm:text-sm xl:text-base' >Live video</p>
            </div>

            <div onClick={() => filepickerRef.current.click()} className='inputIcon'>
                  <CameraIcon className='h-7 text-green-400' />
                  <p className='text-xs sm:text-sm xl:text-base' >Photo/Video</p>
                  <input 
                        ref={filepickerRef}
                        onChange={addImageToPost} 
                        type="file" hidden 
                  />
            </div>

            <div className='inputIcon' >
                  <EmojiHappyIcon className='h-7 text-yellow-300' />
                  <p className='text-xs sm:text-sm xl:text-base' >Feeling/Activity</p>
            </div>
      </div>
    </div>
  )
}

export default InputBox