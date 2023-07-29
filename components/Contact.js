import Image from 'next/legacy/image'
import React from 'react'

function Contact({profile, name}) {
  return (
    <div className='flex items-center  space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl  '>
      <Image 
            className='rounded-full w-auto h-auto'
            objectFit='cover' 
            src={profile}
            width={40}
            height={40}
            layout="fixed" 
            alt='kill' 
            
      />
      <p>{name}</p>
      <div className='absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-bounce ' />
    </div>
  )
}

export default Contact