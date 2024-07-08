import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex w-[100vw] text-purple-600 justify-between'>
      <div className='logo ml-4 w-28 py-1 pl-px'><img src='./src/assets/Navimg/Logo.jpeg'></img></div>
        <ul className='flex gap-5 p-4 cursor-pointer left-[50%]'>
            <li>About</li>
            <li>Projects</li>
            <li>Certifications</li>
        </ul>
        <ul className='flex gap-5 p-4 cursor-pointer'>
          <li><img src='./src/assets/Navimg/Github.svg'></img></li>
          <li><img src='./src/assets/Navimg/Linkedin.svg'></img></li>
          <li><img src='./src/assets/Navimg/Instagram.svg'></img></li>
          <li><button className='min-w-fit relative -top-0.5 w-auto bg-purple-300 text-purple-500 font-bold py-1 px-2  rounded-lg shadow-md hover:border-white hover:shadow-purple-900  flex items-center group'>
            <span>Resume</span>
            <img className='stroke-current transition-all' src='./src/assets/Navimg/document.svg' alt='Document Icon' />
          </button></li>
        </ul>
    </div>
  )
}
