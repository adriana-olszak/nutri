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

function Home() {
  return (
    <div>

      <div className="bg-gray-50">
        <div
          className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">
            Start your free trial today.
          </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <article className="prose lg:prose-xl">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic bread with cheese to their
          children, with the food earning such an iconic status in our culture that kids will often dress
          up as warm, cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
          springing up around the country.
        </p>
      </article>
    </div>

  );
}

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
          <Route path="/dashboard" element={<Home />} />
          <Route path="/recipes" element={<ClientRecipes />} />
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
