import React from 'react';

export const TitleSlide = ({ title, subtitle, author, designation, tagline }) => {
  return (
    <div className="title-layout w-full max-w-4xl text-center">
      {tagline && <div className="tagline">{tagline}</div>}
      <h1>{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
      {author && (
        <div className="mt-10 border-t border-slate-700 pt-5 inline-block">
          <p className="text-xl text-white font-bold m-0">{author}</p>
          {designation && <p className="text-sm text-slate-400 mt-1">{designation}</p>}
        </div>
      )}
    </div>
  );
};
