import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Card, CardHeader, CardContent, CardFooter } from '@nutri/client-ui';
import { useAuth } from '../AuthContext';

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
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <h2 className="text-2xl font-bold">Register</h2>
      </CardHeader>
      <CardContent>
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
          <Button type="submit" className="w-full">Register</Button>
        </form>
      </CardContent>
      <CardFooter>
        <p className="text-center">
          Already have an account?{' '}
          <Button
            variant="ghost"
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
};
