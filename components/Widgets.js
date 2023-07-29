import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid'
import Contact from './Contact'
const contacts = [
      {
            name:"Steve Jobs",
            profile:"https://links.papareact.com/k2j", },
     {
            name:"Mark Zuckerberg",
            profile:"https://links.papareact.com/snf",
      },
      {
            name:"Bill Gates",
            profile:"https://links.papareact.com/zvy",
      },
      {
            name:"Elon Musk",
            profile:"https://links.papareact.com/kxk",
      },
     {
            name:"The Queen",
            profile:"https://links.papareact.com/6gg",
      },
      {
            name:"James Bond",
            profile:"https://links.papareact.com/r57",
      },
      {
            name:"Harry Potter",
            profile:"https://links.papareact.com/d0c",
      },
]

function Widgets() {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
      <div className='flex justify-between items-center text-gray-500 mb-5'>
            <h2 className='text-xl'>Contacts</h2>
            <div className='flex space-x-2'>
                  <VideoCameraIcon className='h-6' />
                  <SearchIcon className='h-6'/>
                  <DotsHorizontalIcon className='h-6'/>
            </div>
      </div>

      {
            contacts.map(
                  (contact) => (
                        <Contact key={contact.profile} profile={contact.profile} name={contact.name} />
                  )
            )
      }
    </div>
  )
}

export default Widgets