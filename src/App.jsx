import React, { useState, useCallback } from 'react';
import { SlideControls } from './components/SlideControls';
import { slidesContent } from './slides/slidesContent';
import { useSwipe } from './hooks/useSwipe';
import { useKeyboard } from './hooks/useKeyboard';
import './styles/slides.css';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next');
  const totalSlides = slidesContent.length;

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection('next');
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection('prev');
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  const goToFirst = useCallback(() => {
    setDirection('prev');
    setCurrentSlide(0);
  }, []);

  const goToLast = useCallback(() => {
    setDirection('next');
    setCurrentSlide(totalSlides - 1);
  }, [totalSlides]);

  // Touch gesture support
  useSwipe({
    onSwipeLeft: nextSlide,
    onSwipeRight: prevSlide,
  });

  // Keyboard navigation
  useKeyboard({
    onNext: nextSlide,
    onPrevious: prevSlide,
    onFirst: goToFirst,
    onLast: goToLast,
  });

  return (
    <div className="min-h-screen text-white font-sans flex items-center justify-center overflow-hidden relative no-select" style={{backgroundColor: 'var(--bg-primary)'}}>
      {/* Main Slide Container */}
      <div className="slide-container relative flex flex-col justify-center items-center">
        {/* Render Active Slide */}
        <div
          key={currentSlide}
          className={`slide-content ${direction === 'next' ? 'slide-enter' : 'slide-exit'}`}
        >
          {slidesContent[currentSlide]}
        </div>

        {/* Controls */}
        <SlideControls
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onPrevious={prevSlide}
          onNext={nextSlide}
        />
      </div>
    </div>
  );
}
