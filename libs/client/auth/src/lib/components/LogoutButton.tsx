import React from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@nutri/client-ui';
import {LogOut} from "lucide-react";
import {cn} from "@nutri/client-utils";

export const LogoutButton: React.FC = (...args) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <Button {...args} onClick={handleLogout} variant="ghost"
            className={"flex items-center justify-start gap-3 rounded-lg py-2 pl-6 text-muted-foreground transition-all hover:bg-gray-50 hover:text-primary"}
    >
      <LogOut className='size-4 text-gray-500'/>
      Logout
    </Button>
  );
};
