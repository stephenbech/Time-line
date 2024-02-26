import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import Post from './post';
import { collection, getDoc, getDocs, query, serverTimestamp } from 'firebase/firestore';
function Posts({posts}) {
      const [documents, setDocuments] = useState([]);
      // console.log(posts)
      const querySnapshot = collection(db, "posts");
        useEffect(() => {
        const getDocuments = async() =>{
            const data = await getDocs(querySnapshot);
            setDocuments(data.docs.map((doc) => (  
                  // console.log(doc.id),
                  {
                        ...doc.data(), 
                        id: doc.id, 
                        timestamp: doc.timestamp,
                        
                  }
                  
            )))
            // 
        }
      
        return () => {
            
          getDocuments();
        }
      }, [querySnapshot])
      


      
      

  return (
    <div>
     {
//      documents?
//         documents.map((doc) =>(
//               <Post
//                     key={doc.id}
//                     name={doc.name}
//                     message={doc.message}
//                     email={doc.email}
//                     timestamp={doc.timestamp}
//                     image={doc.image}
//                     postImage={doc.postImage}
//               />
//       ))
//       :
      posts.map((post)=>(
           <div key={post.id}>
             <Post
                  
                  name={post.name}
                  message={post.message}
                  email={post.email}
                  timestamp={post.timestamp}
                  image={post.image}
                  postImage={post.postImage}
            />
           </div>
      ))

    }
    </div>
  )
}

export default Posts