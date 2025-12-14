import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './SlideControls.css';

export const SlideControls = ({ currentSlide, totalSlides, onPrevious, onNext }) => {
  return (
    <>
      {/* Navigation Buttons */}
      <button
        onClick={onPrevious}
        className="nav-button nav-button-left"
        aria-label="Previous slide"
        disabled={currentSlide === 0}
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={onNext}
        className="nav-button nav-button-right"
        aria-label="Next slide"
        disabled={currentSlide === totalSlides - 1}
      >
        <ChevronRight size={32} />
      </button>

      {/* Slide Counter */}
      <div className="slide-counter">
        {currentSlide + 1} / {totalSlides}
      </div>

      {/* Progress Bar */}
      <div
        className="progress-bar"
        style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
      />
    </>
  );
};
