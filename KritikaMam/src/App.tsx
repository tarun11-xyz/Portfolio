import React, { useState } from 'react';
import GreetingCard from './components/GreetingCard';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import './styles/index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <div className={`min-h-screen flex items-center justify-center p-4 py-10 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <div className="container mx-auto">
          <header className="text-center mb-8 pt-16">
            <h1 className="text-2xl md:text-3xl font-bold text-purple-300 text-shadow mb-2">
              A Special Thank You
            </h1>
            <p className="text-pink-400">
              To an extraordinary Human Value teacher who makes a difference
            </p>
          </header>
          
          <main className="relative">
            <div className="absolute -top-10 left-1/4 w-16 h-16 bg-purple-600/30 rounded-full blur-xl"></div>
            <div className="absolute top-20 right-1/3 w-20 h-20 bg-pink-600/30 rounded-full blur-xl"></div>
            
            <GreetingCard />
            
            <div className="absolute -bottom-8 right-1/4 w-12 h-12 bg-purple-700/30 rounded-full blur-xl"></div>
          </main>
          
          <footer className="text-center mt-10 text-purple-400 opacity-80 text-sm">
            <p>Created with ❤️ and gratitude, 2025</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;