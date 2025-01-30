import React from 'react';
import { MapPin } from 'lucide-react';

export const ContactMap = () => {
  return (
    <div className="bg-white dark:bg-dark-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
        Our Location
      </h2>
      
      <div className="relative w-full h-[300px] bg-gray-100 dark:bg-dark-700 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-8 h-8 text-mint-500 mx-auto mb-2" />
            <p className="text-dark-600 dark:text-dark-400">
              Interactive map will be displayed here
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-dark-600 dark:text-dark-400">
          Serving the entire metropolitan area and surrounding communities
        </p>
      </div>
    </div>
  );
};