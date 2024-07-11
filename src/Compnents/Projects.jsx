// import React, { useState, useEffect, useRef } from 'react';

// const Projects = ({Projslides}) => {
//     const [currentSlide, setCurrentSlide] = useState(0)
//     const [ProjectsToShow, setProjectsToShow] = useState(2)
//     const ProjectcarouselRef = useRef(null);

//     useEffect(() => {
//         const handleResize = () => {
//             if (ProjectcarouselRef.current) {
//                 const containerWidth = ProjectcarouselRef.current.offsetWidth;
//                 const cardWidth = 180;
//                 setProjectsToShow(Math.floor(containerWidth / cardWidth));
//             }
//         };
//         handleResize();
//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     const nextSlide = () => {
//         if (currentSlide < Projslides.length - ProjectsToShow) {
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
//         <div className='Main-project-container'>
//             <div ref={ProjectcarouselRef} className=''>
//                 <div className="Project-carousel-container flex trasition-transform duration-500"
//                     style={{
//                         transform: `translateX(-${calculateTranslateX()}px)`,
//                         width: `${Projslides.length * 140}px`
//                     }}
//                 >
//                     {Projslides.map((Projslide, index) => (
//                         <div key={index} className='Project-carousel-slide' style={{ width: '140px' }}>
//                             <img src={Projslide.image} alt={Projslide.title}
//                                 className='Project-carousel-image' />
//                             <div className='Project-carousel-content'>
//                                 <h2>{Projslide.title}</h2>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <button className='Project-carousel-control prev' onClick={prevSlide}>
//                     &#10094
//                 </button>

//                 <button className="carousel-control next" onClick={nextSlide}>
//                     &#10095;
//                 </button>
//             </div>
//         </div>

//     );
// };

// export default Projects;

import React, { useState, useEffect, useRef } from 'react';
import "./CSS files/Projects.css"

const Projects = ({ Projslides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [ProjectsToShow, setProjectsToShow] = useState(2);
    const ProjectcarouselRef = useRef(null);

    useEffect(() => {
        console.log('Projslides:', Projslides); // Debugging statement

        const handleResize = () => {
            if (ProjectcarouselRef.current) {
                const containerWidth = ProjectcarouselRef.current.offsetWidth;
                const cardWidth = 180; // Adjust this value as needed
                setProjectsToShow(Math.floor(containerWidth / cardWidth));
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [Projslides]);

    const nextSlide = () => {
        if (Projslides && currentSlide < Projslides.length - ProjectsToShow) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const calculateTranslateX = () => {
        return currentSlide * 200; // Translate by the width of one slide
    };

    return (
        <div className='Main-project-container text-purple-500 mt-16'>
            <div className='opacity-30 w-[95%] h-0.5 bg-purple-600 m-auto'></div>
            <h1 className='text-2xl text-center font-bold mt-5'>Projects</h1>
            <div ref={ProjectcarouselRef} className=''>
                <div className='Project-carousel-container flex transition-transform duration-500 mt-5'
                    style={{
                        transform: `translateX(-${calculateTranslateX()}px)`,
                        width: `${Projslides ? Projslides.length * 140 : 0}px` // Set the width based on the number of slides and fixed slide width
                    }}
                >
                    {Projslides && Projslides.length > 0 ? (
                        Projslides.map((Projslide, index) => (
                            <div key={index} className='Project-carousel-slide' style={{ width: '140px' }}>
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
                <button className='Project-carousel-control prev' onClick={prevSlide}>
                    &#10094;
                </button>
                <button className="Project-carousel-control next" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default Projects;
