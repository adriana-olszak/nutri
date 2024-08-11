import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@nutri/client-ui';
import { useAuth } from '../AuthContext';
import { LoginLayout } from '../components/LoginLayout';

export const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { register } = useAuth(); // Use the register function from the auth context

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await register({ email, password });
      // Registration successful, navigate to login page
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <LoginLayout>
      <form onSubmit={handleRegister}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4"
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <Button type="submit" variant="outline" className="w-full font-medium">
          Register
        </Button>
      </form>
      <div>
        <p className="text-center text-sm test-gray-600">
          Already have an account?{' '}
          <Button
            variant="link"
            className="p-0 underline"
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        </p>
      </div>
    </LoginLayout>
  );
};
