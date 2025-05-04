import React from 'react';

const TeacherImage: React.FC = () => {
  return (
    <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-xl">
      <img
        src="https://images.pexels.com/photos/5212326/pexels-photo-5212326.jpeg"
        alt="Dr. Kritika Khandelwal"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
    </div>
  );
};

export default TeacherImage;