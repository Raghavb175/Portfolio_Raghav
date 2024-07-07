import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex w-[100vw] text-purple-600 justify-between'>
        <ul className='flex gap-5 p-4 cursor-pointer'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Certifications</li>
        </ul>
        <ul className='flex gap-5 p-4 cursor-pointer'>
          <li><img src='./src/assets/Github.svg'></img></li>
          <li><img src='./src/assets/Linkedin.svg'></img></li>
          <li><img src='./src/assets/Instagram.svg'></img></li>
          <li><button className='relative -top-0.5 w-auto bg-purple-300 text-purple-500 font-bold py-1 px-2  rounded-lg shadow-md hover:border-white hover:shadow-purple-900  flex items-center group'>
            <span>Resume</span>
            <img className='stroke-current ml-2 transition-all' src='./src/assets/document.svg' alt='Document Icon' />
          </button></li>
        </ul>
    </div>
  )
}
