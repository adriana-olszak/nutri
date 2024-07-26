import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Card, CardHeader, CardContent } from '@nutri/client-ui';
import { useAuth } from '../AuthContext';

export const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    const token = new URLSearchParams(window.location.search).get('token');

    if (!token) {
      setError('Password reset token not found');
      return;
    }

    try {
      await resetPassword(token, password);
      navigate('/login');
    } catch (error) {
      setError('Password reset failed. Please try again.');
      console.error('Password reset failed:', error);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <h2 className="text-2xl font-bold">Reset Password</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleResetPassword}>
          <Input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4"
          />
          <Input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mb-4"
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <Button type="submit" className="w-full">Set New Password</Button>
        </form>
      </CardContent>
    </Card>
  );
};
