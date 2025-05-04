import React from 'react';
import Quote from './Quote';
import TeacherInfo from './TeacherInfo';
import TeacherImage from './TeacherImage';

const CardContent: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800/90 to-purple-900/90 backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl border border-purple-500/20 p-6 md:p-8">
      <div className="text-center mb-6 animate-title">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text animate-gradient">
            Thank You, Dr. Kritika Khandelwal Mam
          </span>
        </h1>
        <p className="text-purple-300 text-lg md:text-xl font-medium opacity-0 animate-fadeIn">
          For Your Guidance & Inspiration
        </p>
      </div>
      
      <div className="separator h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent my-6"></div>
      
      <TeacherImage />
      
      <div className="separator h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent my-6"></div>
      
      <Quote />
      
      <div className="separator h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent my-6"></div>
      
      <TeacherInfo />
      
      <div className="mt-8 text-center">
        <p className="text-purple-300 font-medium">With heartfelt gratitude,</p>
        <p className="text-pink-400 font-bold mt-2">Your Student</p>
      </div>
    </div>
  );
};

export default CardContent;