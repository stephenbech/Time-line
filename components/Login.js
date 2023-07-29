import React from 'react'
import Image from 'next/legacy/image';
import { useSession, signIn, signOut } from "next-auth/react"
function Login() {
  return (
    <div className='grid p-5 place-items-center' >
      <Image 
            src="https://links.papareact.com/5me" 
            width={400} 
            height={300}
            objectFit="contain"
       />
       <h1 onClick={() => signIn()} className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer' >Login with Facebook</h1>
    </div>
  )
}

export default Login