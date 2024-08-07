// import { TypeAnimation } from 'react-type-animation';
// import './CSS files/Example.css'

// export const Example = () => {
//   return (
//     <>
//       <div className='h-[50vh] flex justify-around items-center'>
//         <div className=' upper-left w-[50vw] font-bold text-3xl text-purple-500'>
//           <TypeAnimation
//             sequence={[
//               'Hello I am\nRaghav',
//               2000,
//               'Hello I am\na Fullstack developer',
//               2000,
//               'Hello I am\na Recent Graduate',
//               2000,
//             ]}
//             wrapper="span"
//             speed={10}
//             style={{fontSize: '2em', display: 'inline-block', lineHeight: '1.3', whiteSpace: 'pre-wrap' }}
//             repeat={Infinity}
//           />
//         </div>
//         <div>
//           <img className='shadow' src='./src/assets/imagemy.png' alt='My Image' />
//         </div>
//       </div>
//         <div className='opacity-30 w-[95%] h-0.5 bg-purple-600 m-auto'></div>
//         <div className='About-me text-purple-500 w-[75vw] text-center m-auto py-4'><h1 className='font-bold text-2xl'>About me</h1>
//         <p>I'm a recent SAIT graduate and aspiring Full-Stack Developer with a passion for creating dynamic and responsive web applications. Skilled in both frontend and backend technologies, I stay updated with modern web trends to deliver high-quality digital experiences. Dedicated to continuous learning, I strive to build efficient and user-friendly solutions.
//         </p></div>
//         <div className='opacity-30 w-[95%] h-0.5 bg-purple-600 m-auto'></div>
//     </>
//   );
// };

// Example.jsx
import React, { forwardRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './CSS files/Example.css';

const Example = forwardRef((props, ref) => {
    return (
        <>
            <div ref={ref} className='flex justify-around items-center h-[70vh] flex-col-reverse sm:flex-row max-sm:min-h-[85vh]'>
                <div className='w-full text-3xl font-bold text-purple-500 text-left ml-9 max-sm:p-2 max-sm:text-lg  max-sm:text-center sm:w-1/2 h-auto'>
                    <TypeAnimation
                        sequence={[
                            'Hello I am\nRaghav',
                            2000,
                            'Hello I am\na Fullstack developer',
                            2000,
                            'Hello I am\na Recent Graduate',
                            2000,
                        ]}
                        wrapper="span"
                        speed={10}
                        style={{ fontSize: '2em', display: 'inline-block', lineHeight: '1.3', whiteSpace: 'pre-wrap' }}
                        repeat={Infinity}
                    />
                </div>
                <div className='w-full sm:w-1/2 flex justify-center sm:justify-end p-4 -mb-20'>
                    <img className='shadow max-w-full h-auto sm:' src='./src/assets/imagemy.png' alt='My Image' />
                </div>
            </div>
            <div className='opacity-30 w-[95%] h-0.5 bg-purple-600 m-auto'></div>
            <div className='About-me text-purple-500 w-[75vw] text-center m-auto py-4'>
                <h1 className='font-bold text-2xl'>About me</h1>
                <p>I'm a recent SAIT graduate and aspiring Full-Stack Developer with a passion for creating dynamic and responsive web applications. Skilled in both frontend and backend technologies, I stay updated with modern web trends to deliver high-quality digital experiences. Dedicated to continuous learning, I strive to build efficient and user-friendly solutions.
                </p>
            </div>
            <div className='opacity-30 w-[95%] h-0.5 bg-purple-600 mx-auto'></div>
        </>
    );
});

export default Example;
