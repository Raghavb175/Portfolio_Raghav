
// import React, { useRef } from 'react';

// export const Navbar = ({ scrollToSection }) => {
//   return (
//     <div className='flex w-[100vw] text-purple-600 justify-between pr-6 fixed bg-black z-30 max-lg:pr-2'>
//       <div className='logo ml-4 w-28 py-1 pl-px drop-shadow-lg shadow-purple-500'><img src='./src/assets/Navimg/Logo.jpeg' alt='Logo'></img></div>
//       <ul className='flex gap-5 p-4 cursor-pointer ml-20 -mr-10 max-lg:-mr-0'>
//         <li onClick={() => scrollToSection('example')}>About</li>
//         <li onClick={() => scrollToSection('carousel')}>Proficiencies</li>
//         <li onClick={() => scrollToSection('projects')}>Projects</li>
//         {/* <li onClick={() => scrollToSection('certifications')}>Certifications</li> */}
//         <li onClick={() => scrollToSection('contact')}>Contact</li>
//       </ul>
//       <ul className='social-media flex gap-5 p-4 cursor-pointer '>
//         <a href='https://github.com/Raghavb175' target='_blank' rel='noopener noreferrer'>
//           <img src='./src/assets/Navimg/Github.svg' alt='Github' />
//         </a>
//         <a href='https://ca.linkedin.com/in/raghav-bhatia-0b399723a' target='_blank' rel='noopener noreferrer'>
//           <img src='./src/assets/Navimg/Linkedin.svg' alt='LinkedIn' />
//         </a>
//         <a href='https://www.instagram.com/raghavvvv17/?locale=zh-hans' target='_blank' rel='noopener noreferrer'>
//           <img src='./src/assets/Navimg/Instagram.svg' alt='Instagram' />
//         </a>
//         <a href='./src/assets/Resumepdf/Resume-Raghav.pdf' download='RaghavB-Resume.pdf' className='inline-block'>
//           <li>
//             <button className='min-w-fit relative -top-0.5 w-auto bg-purple-300 text-purple-500 font-bold py-1 px-2 rounded-lg shadow-md hover:border-white hover:shadow-purple-900 flex items-center group max-lg:w-28'>
//               <span>Resume</span>
//               <img className='stroke-current transition-all' src='./src/assets/Navimg/document.svg' alt='Document Icon' />
//             </button>
//           </li>
//         </a>
//       </ul>
//     </div>
//   );
// };
import React, { useState } from 'react';

export const Navbar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex w-[100vw] text-purple-600 justify-between pr-6 fixed bg-black z-30 max-lg:pr-2'>
      <div className='logo ml-4 w-28 py-1 pl-px drop-shadow-lg shadow-purple-500'>
        <img src='./src/assets/Navimg/Logo.jpeg' alt='Logo' />
      </div>
      <ul className='flex gap-5 p-4 cursor-pointer ml-20 -mr-10 max-lg:-mr-0'>
        <li onClick={() => scrollToSection('example')}>About</li>
        <li onClick={() => scrollToSection('carousel')}>Proficiencies</li>
        <li onClick={() => scrollToSection('projects')}>Projects</li>
        {/* <li onClick={() => scrollToSection('certifications')}>Certifications</li> */}
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
      <div className='lg:hidden flex items-start p-4'>
        <button
          className='text-purple-600 focus:outline-none'
          onClick={toggleMenu}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>
      <ul className='hidden lg:flex social-media gap-5 p-4 cursor-pointer'>
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
            <button className='min-w-fit relative -top-0.5 w-auto bg-purple-300 text-purple-500 font-bold py-1 px-2 rounded-lg shadow-md hover:border-white hover:shadow-purple-900 flex items-center group max-lg:w-28'>
              <span>Resume</span>
              <img className='stroke-current transition-all' src='./src/assets/Navimg/document.svg' alt='Document Icon' />
            </button>
          </li>
        </a>
      </ul>
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className='relative bg-gray-800 text-purple-500 w-[30vw] h-[20vh] flex flex-col items-center justify-center space-y-4 rounded-lg'>
          <button
            className='absolute top-2 right-2'
            onClick={toggleMenu}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          <a href='https://github.com/Raghavb175' target='_blank' rel='noopener noreferrer' className='flex items-center'>
            <img src='./src/assets/Navimg/Github.svg' alt='Github' />
            <span className='ml-2'>Github</span>
          </a>
          <a href='https://ca.linkedin.com/in/raghav-bhatia-0b399723a' target='_blank' rel='noopener noreferrer' className='flex items-center'>
            <img src='./src/assets/Navimg/Linkedin.svg' alt='LinkedIn' />
            <span className='ml-2'>Linkedin</span>
          </a>
          <a href='https://www.instagram.com/raghavvvv17/?locale=zh-hans' target='_blank' rel='noopener noreferrer' className='flex items-center'>
            <img src='./src/assets/Navimg/Instagram.svg' alt='Instagram' />
            <span className='ml-2'>Instagram</span>
          </a>
          <a href='./src/assets/Resumepdf/Resume-Raghav.pdf' download='RaghavB-Resume.pdf' className='inline-block flex items-center'>
            <li>
              <button className='bg-purple-300 text-purple-500 font-bold py-1 px-2 rounded-lg shadow-md hover:shadow-purple-900 flex items-center'>
                <span>Resume</span>
                <img className='stroke-current transition-all' src='./src/assets/Navimg/document.svg' alt='Document Icon' />
              </button>
            </li>
          </a>
        </div>
      </div>
    </div>
  );
};


