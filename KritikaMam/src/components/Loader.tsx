import React, { useEffect, useState } from 'react';

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [text, setText] = useState('');
  const fullText = 'From Section K';
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(onComplete, 500);
        }, 800);
      }
    }, 100); // Faster typing speed

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-900 transition-opacity duration-1000 ${isComplete ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text transition-all duration-300">
            {text}
          </span>
          <span className="inline-block w-[2px] h-8 bg-purple-400 animate-cursor"></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;