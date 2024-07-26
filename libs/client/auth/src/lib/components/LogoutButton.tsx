import React from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@nutri/client-ui';

export const LogoutButton: React.FC = (...args) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <Button {...args} onClick={handleLogout} variant="ghost" className="w-full justify-start">
      Logout
    </Button>
  );
};
