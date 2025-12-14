import { useEffect } from 'react';

export const useKeyboard = ({ onNext, onPrevious, onFirst, onLast }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          onNext?.();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          onPrevious?.();
          break;
        case 'Home':
          e.preventDefault();
          onFirst?.();
          break;
        case 'End':
          e.preventDefault();
          onLast?.();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrevious, onFirst, onLast]);
};
