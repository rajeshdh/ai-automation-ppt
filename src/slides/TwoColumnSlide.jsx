import React from 'react';

export const TwoColumnSlide = ({ title, leftContent, rightContent, tiled = false, className = '' }) => {
  return (
    <div className="w-full">
      {title && <h2 className="slide-title">{title}</h2>}
      <div className={`two-column ${tiled ? 'tiled' : ''} ${className}`}>
        {leftContent}
        {rightContent}
      </div>
    </div>
  );
};
