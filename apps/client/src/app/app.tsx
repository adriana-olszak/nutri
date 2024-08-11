import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import { ClientRecipes } from '@nutri/client-recipes';
import { ProtectedRoute } from '@nutri/client-auth';
import { Layout } from './layout/Layout';
import { RegisterPage, ForgotPasswordPage, ResetPasswordPage, AuthenticationPage } from '@nutri/client-auth';
import { ErrorPage } from './pages/ErrorPage';
import { MaintenancePage } from './pages/Maintenance';
import { NotFoundPage } from './pages/NotFoundPage';
import { useGql } from './hooks/useGql';

import React from 'react';
import {ChefHat, Users, Calendar, ArrowRight} from 'lucide-react';
import {WelcomeDashboard} from "./pages/dashboard";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute/>} />
      <Route path="/login" element={<AuthenticationPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<WelcomeDashboard />} />
          <Route path="/recipes" element={<ClientRecipes />} />
          <Route path="/patients" element={<ClientRecipes />} />
          <Route path="/settings" element={<ClientRecipes />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
      <Route />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/maintenance" element={<MaintenancePage />} />

      {/* 404 route - should be last */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

const Profile: React.FC = () => {
  const query = useGql();

  useEffect(() => {
    const fetchProfile = async () => {
      const result = await query.AccountInfo();
      // Handle result
    };
    fetchProfile();
  }, [query]);

  return <h1>Profile</h1>;
};

export default App;
