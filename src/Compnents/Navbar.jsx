import React from 'react'

export const Navbar = () => {
  return (
    <div className='w-[100vw] bg-purple-700 text-white'>
        <ul className='flex gap-5 p-4 cursor-pointer'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Certifications</li>
        </ul>
    </div>
  )
}
