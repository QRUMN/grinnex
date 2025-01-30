import React from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardHeader } from './DashboardHeader';
import { BackButton } from '../../common/BackButton';

export const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <BackButton className="mb-6" />
          <Outlet />
        </main>
      </div>
    </div>
  );
};