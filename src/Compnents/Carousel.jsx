// import React, { useState, useEffect, useRef } from 'react';
// import './CSS files/Carousel.css'; // Import CSS for styling

// const Carousel = ({ slides, headerImage }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [cardsToShow, setCardsToShow] = useState(1);
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const handleResize = () => {
//       if (carouselRef.current) {
//         const containerWidth = carouselRef.current.offsetWidth;
//         const cardWidth = 160; // Fixed width for each slide
//         setCardsToShow(Math.floor(containerWidth / cardWidth));
//       }
//     };

//     handleResize(); // Initial calculation
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const nextSlide = () => {
//     if (currentSlide < slides.length - cardsToShow) {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

//   const calculateTranslateX = () => {
//     return currentSlide * 200; // Translate by the width of one slide
//   };

//   return (
//     <div className='Carousel-main flex items-center justify-evenly max-h-fit -mb-12'>
//       <div className='front-header text-purple-500 text-xl'>
//         <img className='w-[65%] ml-7' src={headerImage} alt="Header" />
//       </div>
//       <div ref={carouselRef} className="carousel  mx-7 flex justify-start overflow-hidden">
//         <div
//           className="carousel-container flex transition-transform duration-500 "
//           style={{
//             transform: `translateX(-${calculateTranslateX()}px)`,
//             width: `${slides.length * 140}px` // Set the width based on the number of slides and fixed slide width
//           }}
//         >
//           {slides.map((slide, index) => (
//             <div key={index} className="carousel-slide mx-5" style={{ width: '140px' }}>
//               <img src={slide.image} alt={slide.title} className="carousel-image w-full mx-auto" />
//               <div className="carousel-content flex justify-center">
//                 <h2>{slide.title}</h2>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button className="carousel-control prev" onClick={prevSlide}>
//           &#10094;
//         </button>
//         <button className="carousel-control next" onClick={nextSlide}>
//           &#10095;
//         </button>
//       </div>
//     </div>
    
//   );
// };

// export default Carousel;

import React, { useState, useEffect, useRef, forwardRef } from 'react';
import './CSS files/Carousel.css';

const Carousel = forwardRef(({ slides, headerImage }, ref) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        const cardWidth = 160; // Fixed width for each slide
        setCardsToShow(Math.floor(containerWidth / cardWidth));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    if (currentSlide < slides.length - cardsToShow) {
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

  return (<>
  
    <div ref={ref} className='Carousel-main flex items-center justify-between max-h-fit -mb-12'>
      
      <div className='front-header text-purple-500 text-xl'>
        <img className='w-[65%] ml-7' src={headerImage} alt="Header" />
      </div>
      <div ref={carouselRef} className="carousel  mx-7 flex justify-start overflow-hidden">
        <div
          className="carousel-container flex transition-transform duration-500 "
          style={{
            transform: `translateX(-${calculateTranslateX()}px)`,
            width: `${slides.length * 140}px` // Set the width based on the number of slides and fixed slide width
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide mx-5" style={{ width: '140px' }}>
              <img src={slide.image} alt={slide.title} className="carousel-image w-full mx-auto" />
              <div className="carousel-content flex justify-center">
                <h2>{slide.title}</h2>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
    </>
  );
});

export default Carousel;
