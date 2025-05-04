import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import CardContent from './CardContent';

const GreetingCard: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation based on mouse position (limited to +/- 10 degrees)
    const rotateY = ((x / rect.width) * 20 - 10).toFixed(2);
    const rotateX = (((y / rect.height) * 20 - 10) * -1).toFixed(2);
    
    setRotation({ 
      x: parseFloat(rotateX),
      y: parseFloat(rotateY)
    });
  };
  
  const resetRotation = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      className="perspective-1000 w-full max-w-3xl mx-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotation}
    >
      <div 
        className="card-container relative transition-transform duration-200 ease-out transform-style-3d hover:shadow-2xl"
        style={{ 
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <div className="absolute -top-2 -left-2 text-purple-600">
          <Sparkles size={24} className="animate-pulse" />
        </div>
        <div className="absolute -bottom-2 -right-2 text-pink-500">
          <Heart size={24} className="animate-beat" />
        </div>
        
        <CardContent />
      </div>
    </div>
  );
};

export default GreetingCard;