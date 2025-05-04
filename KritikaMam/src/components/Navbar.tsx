import React from 'react';
import { Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 mx-4">
      <div className="max-w-4xl mx-auto bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-full px-6 py-3 flex items-center justify-center shadow-lg">
        <div className="flex items-center gap-2">
          <Heart size={20} className="text-pink-400" />
          <h1 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            For Kritika Mam
          </h1>
          <Heart size={20} className="text-pink-400" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;