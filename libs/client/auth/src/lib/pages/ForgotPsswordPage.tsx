import React, { useState } from 'react';
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardContent
} from '@nutri/client-ui';
import { useAuth } from '../AuthContext';

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const { forgotPassword } = useAuth();

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
    } catch (error) {
      console.error('Forgot password failed:', error);
    }
  };
  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <h2 className="text-2xl font-bold">Forgot Password</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleForgotPassword}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4"
          />
          <Button type="submit" className="w-full">Reset Password</Button>
        </form>
      </CardContent>
    </Card>
  );
};
