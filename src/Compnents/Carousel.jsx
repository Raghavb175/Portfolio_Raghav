import React, { useState, useEffect, useRef } from 'react';
import './CSS files/Carousel.css'; // Import CSS for styling

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        const cardWidth = 240; // Fixed width for each slide
        setCardsToShow(Math.floor(containerWidth / cardWidth));
      }
    };

    handleResize(); // Initial calculation
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
    return currentSlide * 120; // Translate by the width of one slide
  };

  return (
    <div className='Carousel-main flex items-center justify-around'>
      <div className='front-header text-purple-500 text-xl'><img className='w-[55%] ml-7' src="./src/assets/Frontendimg/frontend.png" alt=""></img></div>
      <div ref={carouselRef} className="carousel mx-7 flex justify-start overflow-hidden">
        <div
          className="carousel-container pt-6 flex transition-transform duration-500"
          style={{
            transform: `translateX(-${calculateTranslateX()}px)`,
            width: `${slides.length * 140}px` // Set the width based on the number of slides and fixed slide width
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide mx-5" style={{ width: '140px' }}>
              <img src={slide.image} alt={slide.title} className="carousel-image w-full m-auto" />
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
  );
};

export default Carousel;