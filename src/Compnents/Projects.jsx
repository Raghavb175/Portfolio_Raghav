
// import React, { useState, useEffect, useRef } from 'react';
// import "./CSS files/Projects.css"

// const Projects = ({ Projslides }) => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [ProjectsToShow, setProjectsToShow] = useState(2);
//     const ProjectcarouselRef = useRef(null);

//     useEffect(() => {
//         console.log('Projslides:', Projslides); // Debugging statement

//         const handleResize = () => {
//             if (ProjectcarouselRef.current) {
//                 const containerWidth = ProjectcarouselRef.current.offsetWidth;
//                 const cardWidth = 180; // Adjust this value as needed
//                 setProjectsToShow(Math.floor(containerWidth / cardWidth));
//             }
//         };
//         handleResize();
//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, [Projslides]);

//     const nextSlide = () => {
//         if (Projslides && currentSlide < Projslides.length - ProjectsToShow) {
//             setCurrentSlide(currentSlide + 1);
//         }
//     };

//     const prevSlide = () => {
//         if (currentSlide > 0) {
//             setCurrentSlide(currentSlide - 1);
//         }
//     };

//     const calculateTranslateX = () => {
//         return currentSlide * 200; // Translate by the width of one slide
//     };

//     return (
//         <div className='Main-project-container text-purple-500 mt-16'>
//             <div className='opacity-30 w-[95%] h-0.5 bg-purple-600 m-auto'></div>
//             <h1 className='text-2xl text-center font-bold mt-5'>Projects</h1>
//             <div ref={ProjectcarouselRef} className=''>
//                 <div className='Project-carousel-container flex transition-transform duration-500 mt-5'
//                     style={{
//                         transform: `translateX(-${calculateTranslateX()}px)`,
//                         width: `${Projslides ? Projslides.length * 140 : 0}px` // Set the width based on the number of slides and fixed slide width
//                     }}
//                 >
//                     {Projslides && Projslides.length > 0 ? (
//                         Projslides.map((Projslide, index) => (
//                             <div key={index} className='Project-carousel-slide' style={{ width: '140px' }}>
//                                 <img src={Projslide.image} alt={Projslide.title} className='Project-carousel-image' />
//                                 <div className='Project-carousel-content text-purple-500'>
//                                     <h2>{Projslide.title}</h2>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <div>No projects available</div>
//                     )}
//                 </div>
//                 <button className='Project-carousel-control prev' onClick={prevSlide}>
//                     &#10094;
//                 </button>
//                 <button className="Project-carousel-control next" onClick={nextSlide}>
//                     &#10095;
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Projects;

import React, { useState, useEffect, useRef } from 'react';
import './CSS files/Projects.css';

const Projects = ({ Projslides }) => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const ProjectcarouselRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (ProjectcarouselRef.current) {
                const containerWidth = ProjectcarouselRef.current.offsetWidth;
                const cardWidth = 180; // Adjust this value as needed
                // No need to update ProjectsToShow as we always show 3 slides (1 main + 2 sides)
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [Projslides]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Projslides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + Projslides.length) % Projslides.length);
    };

    const getSlideStyle = (index) => {
        const slidePosition = index - currentSlide;
        if (slidePosition === 0) {
            return { transform: 'translateX(0) scale(1)', zIndex: 2, opacity: 1 };
        } else if (slidePosition === 1 || (slidePosition === -2 && currentSlide === 0)) {
            return { transform: 'translateX(100%) scale(0.8)', zIndex: 1, opacity: 0.8 };
        } else if (slidePosition === -1 || (slidePosition === 2 && currentSlide === Projslides.length - 1)) {
            return { transform: 'translateX(-100%) scale(0.8)', zIndex: 1, opacity: 0.8 };
        } else {
            return { transform: 'translateX(200%) scale(0.6)', zIndex: 0, opacity: 0.6 };
        }
    };

    return (
        <div className='Main-project-container text-purple-500 mt-16'>
            <div className='opacity-30 w-[95%] h-0.5 bg-purple-600 m-auto'></div>
            <h1 className='text-2xl text-center font-bold mt-5'>Projects</h1>
            <div ref={ProjectcarouselRef} className='Project-carousel-wrapper relative w-[45vw] m-auto'>
                <div className='Project-carousel-container flex justify-center items-center relative mt-5 overflow-hidden'>
                    {Projslides && Projslides.length > 0 ? (
                        Projslides.map((Projslide, index) => (
                            <div
                                key={index}
                                className='Project-carousel-slide absolute transition-transform duration-500'
                                style={getSlideStyle(index)}
                            >
                                <img src={Projslide.image} alt={Projslide.title} className='Project-carousel-image' />
                                <div className='Project-carousel-content text-purple-500'>
                                    <h2>{Projslide.title}</h2>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>No projects available</div>
                    )}
                </div>
                <button className='Project-carousel-control prev absolute left-0' onClick={prevSlide}>
                    &#10094;
                </button>
                <button className="Project-carousel-control next absolute right-0" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default Projects;