import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bug, LogIn } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  const navigate = useNavigate();

  const handleSchedule = () => {
    navigate('/onboarding');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-dark-900/80 backdrop-blur-lg border-b border-dark-200/20 dark:border-dark-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Bug className="w-8 h-8 text-mint-500" />
            <span className="text-xl font-bold">Grinnage Extermination</span>
          </Link>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button 
              onClick={() => navigate('/login')}
              className="flex items-center px-4 py-2 text-mint-500 hover:text-mint-600 transition-colors"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Sign In
            </button>
            <button 
              onClick={handleSchedule}
              className="px-6 py-2 bg-mint-500 text-white rounded-lg hover:bg-mint-600 transition-colors"
            >
              Schedule Service
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};