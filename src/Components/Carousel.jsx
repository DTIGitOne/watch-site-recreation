import React, { useState } from 'react';
import "../css/carousel.css";
import LeftArrow from '../svg/LeftArrow';
import RightArrow from '../svg/RightArrow';
import { reviews } from '../Data/data';
import ReviewCard from './ReviewCard';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-content">
        <ReviewCard
          key={reviews[currentIndex].id}
          text={reviews[currentIndex].text}
          date={reviews[currentIndex].date}
          image={reviews[currentIndex].image}
          name={reviews[currentIndex].name}
          title={reviews[currentIndex].title}
        />
      </div>
      <div className="carousel-controls">
        <button onClick={goToPrevious} className="carousel-btn">
          <LeftArrow />
        </button>
        <button onClick={goToNext} className="carousel-btn">
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
