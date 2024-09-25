import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import { ProtectedRoute } from '@nutri/client-auth';
import { Layout } from './layout/Layout';
import {
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  AuthenticationPage,
} from '@nutri/client-auth';
import { ErrorPage } from './pages/ErrorPage';
import { MaintenancePage } from './pages/Maintenance';
import { NotFoundPage } from './pages/NotFoundPage';
import { useGql } from './hooks/useGql';

import React from 'react';
import { WelcomeDashboard } from './pages/dashboard';
import { Patients } from './pages/patients/Patients';
import { Recipe } from './pages/recipe/Recipe';
import { Recipes } from './pages/recipes/Recipes';
import {AssessmentTools} from "./pages/assessment-tools/AssessmentTools";
import {QuestionnaireCreator} from "./pages/questionnaire-creator/QuestionnaireCreator";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />} />
      <Route path="/login" element={<AuthenticationPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<WelcomeDashboard />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:recipeId" element={<Recipe />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/tools" element={<AssessmentTools />} />
          <Route path="/surveys/:surveyId" element={<QuestionnaireCreator />} />

          <Route path="/workflows" element={<Patients />} />
          <Route path="/settings" element={<Recipe />} />
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
