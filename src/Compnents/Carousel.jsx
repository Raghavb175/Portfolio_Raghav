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
    return currentSlide * 180; // Translate by the width of one slide
  };

  return (
    <div ref={ref} className='Carousel-main flex items-center justify-between max-h-fit max-lg:justify-evenly max-sm:justify-start'>
      <div className='front-header text-purple-500 text-xl max-lg:w-60 mx-7 max-sm:-ml-2'>
        <img className='w-[55%] ml-7 -mt-10 max-lg:w-[100%] max-sm:ml-0 m-0' src={headerImage} alt="Header" />
      </div>
      <div ref={carouselRef} className="carousel mr-5 flex justify-start overflow-hidden max-sm:mx-0 right-4">
        <div
          className="carousel-container flex transition-transform duration-500 overflow-hidden"
          style={{
            transform: `translateX(-${calculateTranslateX()}px)`,
            width: `${slides.length * 140}px` // Set the width based on the number of slides and fixed slide width
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide mx-5 max-lg:mx-0 max-sm:-mx-4" style={{ width: '140px' }}>
              <img src={slide.image} alt={slide.title} className="carousel-image w-[70%] mx-auto" />
              <div className="carousel-content flex justify-center text-purple-500">
                <h2>{slide.title}</h2>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control prev max-sm:left-6" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-control next max-sm:right-6" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
});

export default Carousel;





// import React, { useState, useEffect, useRef, forwardRef } from 'react';
// import './CSS files/Carousel.css';

// const Carousel = forwardRef(({ slides, headerImage }, ref) => {
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

//     handleResize();
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
//     return currentSlide * 180; // Translate by the width of one slide
//   };

//   return (<>
  
//     <div ref={ref} className='Carousel-main flex items-center justify-between max-h-fit max-lg:justify-evenly max-sm:justify-start'>
      
//       <div className='front-header text-purple-500 text-xl max-lg:w-60 mx-7 max-sm:-ml-2'>
//         <img className='w-[55%] ml-7 -mt-10 max-lg:w-[100%] max-sm:ml-0 m-0' src={headerImage} alt="Header" />
//       </div>
//       <div ref={carouselRef} className="carousel  mx-5 flex justify-start overflow-hidden max-sm:mx-0 right-4">
//         <div
//           className="carousel-container flex transition-transform duration-500 "
//           style={{
//             transform: `translateX(-${calculateTranslateX()}px)`,
//             width: `${slides.length * 140}px` // Set the width based on the number of slides and fixed slide width
//           //  ` @media screen and (max-width: 992px) {
//           //     body {
//           //       background-color: blue;
//           //     }
//           //   }`
//           }}
//         >
//           {slides.map((slide, index) => (
//             <div key={index} className="carousel-slide mx-5 max-lg:mx-0 max-sm:-mx-4" style={{ width: '140px' }}>
//               <img src={slide.image} alt={slide.title} className="carousel-image w-[70%] mx-auto" />
//               <div className="carousel-content flex justify-center">
//                 <h2>{slide.title}</h2>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button className="carousel-control prev max-sm:left-6" onClick={prevSlide}>
//           &#10094;
//         </button>
//         <button className="carousel-control next max-sm:right-6" onClick={nextSlide}>
//           &#10095;
//         </button>
//       </div>
//     </div>
//     </>
//   );
// });

// export default Carousel;
