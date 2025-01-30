import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { Bell, Settings } from 'lucide-react';
import { ThemeToggle } from '../../layout/ThemeToggle';

export const DashboardHeader = () => {
  const { user } = useAuth();

  return (
    <header className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-dark-900 dark:text-white">
              Welcome, {user?.fullName}
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-dark-500 hover:text-dark-700 dark:text-dark-400 dark:hover:text-dark-200">
              <Bell className="w-5 h-5" />
            </button>
            <ThemeToggle />
            <button className="text-dark-500 hover:text-dark-700 dark:text-dark-400 dark:hover:text-dark-200">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};