import React, { useState } from 'react';
import './CSS files/Carousel.css'; // Import CSS for styling

const Carousel = ({ slides, cardsToShow }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= slides.length - cardsToShow ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? slides.length - cardsToShow : prev - 1));
  };

  return (
    <div className="carousel w-[75vw] flex justify-center mx-auto">
      <div className="carousel-container " style={{ transform: `translateX(-${currentSlide * (100 / cardsToShow)}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide w-60">
            <img src={slide.image} alt={slide.title} className="carousel-image w-[50%] m-auto" />
            <div className="carousel-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
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
  );
};

export default Carousel;
