// import React from 'react'

// export const Navbar = () => {
//   return (
//     <div className='flex w-[100vw] text-purple-600 justify-between pr-6'>
//       <div className='logo ml-4 w-28 py-1 pl-px'><img src='./src/assets/Navimg/Logo.jpeg'></img></div>
//       <ul className='flex gap-5 p-4 cursor-pointer left-[50%]'>
//         <li>About</li>
//         <li>Projects</li>
//         <li>Certifications</li>
//       </ul>
//       <ul className='flex gap-5 p-4 cursor-pointer'>
//         <a href='https://github.com/Raghavb175' target='_blank' rel='noopener noreferrer'>
//           <img src='./src/assets/Navimg/Github.svg' alt='Instagram' />
//         </a>
//         <a href='https://ca.linkedin.com/in/raghav-bhatia-0b399723a' target='_blank' rel='noopener noreferrer'>
//           <img src='./src/assets/Navimg/Linkedin.svg' alt='Instagram' />
//         </a>
//         <a href='https://www.instagram.com/raghavvvv17/?locale=zh-hans' target='_blank' rel='noopener noreferrer'>
//           <img src='./src/assets/Navimg/Instagram.svg' alt='Instagram' />
//         </a>
//         <a href='./src/assets/Resumepdf/Resume-Raghav.pdf' download='RaghavB-Resume.pdf' className='inline-block'>
//           <li><button className='min-w-fit relative -top-0.5 w-auto bg-purple-300 text-purple-500 font-bold py-1 px-2  rounded-lg shadow-md hover:border-white hover:shadow-purple-900  flex items-center group'>
//             <span>Resume</span>
//             <img className='stroke-current transition-all' src='./src/assets/Navimg/document.svg' alt='Document Icon' />
//           </button></li>
//         </a>
//       </ul>
//     </div>
//   )
// }
import React, { useRef } from 'react';

export const Navbar = ({ scrollToSection }) => {
  return (
    <div className='flex w-[100vw] text-purple-600 justify-between pr-6 fixed bg-black z-30'>
      <div className='logo ml-4 w-28 py-1 pl-px drop-shadow-lg shadow-purple-500'><img src='./src/assets/Navimg/Logo.jpeg' alt='Logo'></img></div>
      <ul className='flex gap-5 p-4 cursor-pointer ml-20 -mr-10'>
        <li onClick={() => scrollToSection('example')}>About</li>
        <li onClick={() => scrollToSection('carousel')}>Proficiencies</li>
        <li onClick={() => scrollToSection('projects')}>Projects</li>
        {/* <li onClick={() => scrollToSection('certifications')}>Certifications</li> */}
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
      <ul className='flex gap-5 p-4 cursor-pointer '>
        <a href='https://github.com/Raghavb175' target='_blank' rel='noopener noreferrer'>
          <img src='./src/assets/Navimg/Github.svg' alt='Github' />
        </a>
        <a href='https://ca.linkedin.com/in/raghav-bhatia-0b399723a' target='_blank' rel='noopener noreferrer'>
          <img src='./src/assets/Navimg/Linkedin.svg' alt='LinkedIn' />
        </a>
        <a href='https://www.instagram.com/raghavvvv17/?locale=zh-hans' target='_blank' rel='noopener noreferrer'>
          <img src='./src/assets/Navimg/Instagram.svg' alt='Instagram' />
        </a>
        <a href='./src/assets/Resumepdf/Resume-Raghav.pdf' download='RaghavB-Resume.pdf' className='inline-block'>
          <li>
            <button className='min-w-fit relative -top-0.5 w-auto bg-purple-300 text-purple-500 font-bold py-1 px-2 rounded-lg shadow-md hover:border-white hover:shadow-purple-900 flex items-center group'>
              <span>Resume</span>
              <img className='stroke-current transition-all' src='./src/assets/Navimg/document.svg' alt='Document Icon' />
            </button>
          </li>
        </a>
      </ul>
    </div>
  );
};
