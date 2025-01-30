import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { 
  Home, Calendar, CreditCard, FileText, Settings, Building2, 
  Users, Activity, Shield, BarChart2, Wrench, LogOut
} from 'lucide-react';

const getNavItems = (role: string) => {
  switch (role) {
    case 'residential':
      return [
        { icon: <Home />, label: 'Overview', path: '/dashboard' },
        { icon: <Calendar />, label: 'Appointments', path: '/dashboard/appointments' },
        { icon: <CreditCard />, label: 'Billing', path: '/dashboard/billing' },
        { icon: <FileText />, label: 'Documents', path: '/dashboard/documents' },
        { icon: <Settings />, label: 'Settings', path: '/dashboard/settings' }
      ];
    case 'commercial':
      return [
        { icon: <Home />, label: 'Overview', path: '/commercial' },
        { icon: <Building2 />, label: 'Locations', path: '/commercial/locations' },
        { icon: <Calendar />, label: 'Appointments', path: '/commercial/appointments' },
        { icon: <CreditCard />, label: 'Billing', path: '/commercial/billing' },
        { icon: <FileText />, label: 'Documents', path: '/commercial/documents' },
        { icon: <Settings />, label: 'Settings', path: '/commercial/settings' }
      ];
    case 'admin':
      return [
        { icon: <Activity />, label: 'Dashboard', path: '/admin' },
        { icon: <Users />, label: 'Users', path: '/admin/users' },
        { icon: <BarChart2 />, label: 'Analytics', path: '/admin/analytics' },
        { icon: <Shield />, label: 'Security', path: '/admin/security' },
        { icon: <Wrench />, label: 'Settings', path: '/admin/settings' }
      ];
    default:
      return [];
  }
};

export const DashboardSidebar = () => {
  const { user, logout } = useAuth();
  const navItems = getNavItems(user?.role || 'residential');

  return (
    <aside className="w-64 bg-white dark:bg-dark-800 border-r border-gray-200 dark:border-dark-700 min-h-screen">
      <div className="p-6 border-b border-gray-200 dark:border-dark-700">
        <h1 className="text-xl font-bold text-dark-900 dark:text-white">
          {user?.role === 'admin' ? 'Admin Portal' : 
           user?.role === 'commercial' ? 'Business Portal' : 
           'Client Portal'}
        </h1>
      </div>

      <nav className="p-4">
        <div className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                flex items-center px-4 py-3 rounded-lg text-sm font-medium
                ${isActive 
                  ? 'bg-mint-50 text-mint-500 dark:bg-mint-900/20 dark:text-mint-400' 
                  : 'text-dark-600 hover:bg-gray-50 dark:text-dark-400 dark:hover:bg-dark-700'
                }
              `}
              end={item.path.split('/').length === 2}
            >
              <span className="w-5 h-5 mr-3">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="pt-4 mt-4 border-t border-gray-200 dark:border-dark-700">
          <button
            onClick={logout}
            className="flex items-center w-full px-4 py-3 text-sm font-medium text-dark-600 hover:bg-gray-50 dark:text-dark-400 dark:hover:bg-dark-700 rounded-lg"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </nav>
    </aside>
  );
};