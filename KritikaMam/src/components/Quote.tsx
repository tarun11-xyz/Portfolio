import React from 'react';

const Quote: React.FC = () => {
  return (
    <div className="py-4 px-6 bg-purple-900/30 backdrop-blur-sm rounded-lg shadow-inner border border-purple-500/20 transform hover:scale-102 transition-all duration-300">
      <blockquote className="relative">
        <div className="absolute -top-4 -left-2 text-5xl text-purple-400 opacity-50">"</div>
        <p className="text-xl md:text-2xl text-purple-200 italic font-light relative z-10 text-center px-4 py-2">
          Happiness and prosperity
        </p>
        <div className="absolute -bottom-10 -right-2 text-5xl text-purple-400 opacity-50">"</div>
      </blockquote>
    </div>
  );
};

export default Quote;