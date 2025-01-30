import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  change?: string;
}

export const StatCard = ({ label, value, icon, change }: StatCardProps) => {
  return (
    <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
          {change && (
            <p className={`text-sm mt-1 ${
              change.startsWith('+') 
                ? 'text-green-500' 
                : change.startsWith('-')
                ? 'text-red-500'
                : 'text-gray-500'
            }`}>
              {change}
            </p>
          )}
        </div>
        {icon}
      </div>
    </div>
  );
};