import React from 'react';

const TeacherInfo: React.FC = () => {
  return (
    <div className="space-y-4 text-center md:text-left md:flex items-start justify-between">
      <div className="md:w-3/5 space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-purple-300">
          Your Impact Has Been Immeasurable
        </h2>
        
        <p className="text-gray-300 leading-relaxed">
          Dear Dr. Khandelwal, thank you for creating such a friendly environment 
          for all your students. Your passion for teaching human values has transformed 
          our understanding and inspired us to be better individuals.
        </p>
        
        <p className="text-gray-300 leading-relaxed">
          Your kindness, wisdom, and dedication have made a lasting impression on 
          all of us. The lessons we've learned extend far beyond the classroom.
        </p>
      </div>
      
      <div className="qualities md:w-2/5 bg-purple-900/20 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-purple-500/20">
        <h3 className="text-lg font-semibold text-pink-400 mb-3">What Makes You Special</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="w-2 h-2 inline-block bg-pink-500 rounded-full mr-2"></span>
            <span className="text-purple-200">Incredibly supportive</span>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 inline-block bg-pink-500 rounded-full mr-2"></span>
            <span className="text-purple-200">Patient and understanding</span>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 inline-block bg-pink-500 rounded-full mr-2"></span>
            <span className="text-purple-200">Inspirational mentor</span>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 inline-block bg-pink-500 rounded-full mr-2"></span>
            <span className="text-purple-200">Creates a positive atmosphere</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeacherInfo;