import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@nutri/client-utils';
import { Home, User, BookOpen, Banana, UsersRound, Cog } from 'lucide-react';
import {
  Button,
} from '@nutri/client-ui';
import { LogoutButton } from '@nutri/client-auth';

const Sidebar = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarLinks = [
    { path: '/dashboard', label: 'Dashboard', icon: Home },
    { path: '/recipes', label: 'Recipes', icon: BookOpen },
    { path: '/patients', label: 'Patients', icon: UsersRound },
  ];
  const sidebarBottomSectionLinks = [
    { path: '/profile', label: 'My Profile', icon: User },
    { path: '/settings', label: 'Settings', icon: Cog },
  ];

  return (
    <div className={cn('flex h-full max-h-screen flex-col gap-2', className)}>
      <div className="flex min-h-14 items-center border-b px-3">
        <Button
          variant="ghost"
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 font-semibold"
        >
          <Banana className="h-6 w-6" />
          <span className="">Diet Draft App</span>
        </Button>
      </div>
      <nav className="flex flex-col gap-1 h-full">
        {sidebarLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Button
              key={link.path}
              variant="ghost"
              className={cn(
                'flex items-center justify-start gap-3 rounded-none border-l-4 border-transparent',
                isActive &&
                  'bg-gray-50 text-primary border-primary-600',
              )}
              onClick={() => navigate(link.path)}
            >
              <link.icon
                className={cn(
                  'h-4 w-4',
                  isActive ? 'text-gray-600' : 'text-gray-500',
                )}
              />
              {link.label}
            </Button>
          );
        })}

        <div className="flex flex-1 pb-4 flex-col justify-end ">
          {sidebarBottomSectionLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Button
                key={link.path}
                variant="ghost"
                className={cn(
                  'flex items-center justify-start gap-3 rounded-none border-l-4 border-transparent',
                  isActive &&
                  'bg-gray-50 text-primary border-primary-600',
                )}
                onClick={() => navigate(link.path)}
              >
                <link.icon
                  className={cn(
                    'h-4 w-4',
                    isActive ? 'text-gray-600' : 'text-gray-500',
                  )}
                />
                {link.label}
              </Button>
            );
          })}

          <LogoutButton className={cn('h-4 w-4')} />
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
