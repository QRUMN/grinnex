import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ResidentialDashboard } from '../components/dashboard/residential/ResidentialDashboard';
import { CommercialDashboard } from '../components/dashboard/commercial/CommercialDashboard';
import { AdminDashboard } from '../components/dashboard/admin/AdminDashboard';
import { PrivateRoute } from './PrivateRoute';

export const PortalRoutes = () => {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route path="/admin/*" element={
        <PrivateRoute allowedRoles={['admin']}>
          <AdminDashboard />
        </PrivateRoute>
      } />

      {/* Commercial Routes */}
      <Route path="/commercial/*" element={
        <PrivateRoute allowedRoles={['commercial']}>
          <CommercialDashboard />
        </PrivateRoute>
      } />

      {/* Residential Routes */}
      <Route path="/dashboard/*" element={
        <PrivateRoute allowedRoles={['residential']}>
          <ResidentialDashboard />
        </PrivateRoute>
      } />

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};