import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@nutri/client-utils';
import {
  Home,
  User,
  BookOpen,
  Bell,
  Package2
} from 'lucide-react';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@nutri/client-ui';

const Sidebar = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarLinks = [
    { path: '/dashboard', label: 'Dashboard', icon: Home },
    { path: '/recipes', label: 'Recipes', icon: BookOpen },
    { path: '/profile', label: 'Profile', icon: User }
  ];

  return (
    <div className={cn('flex h-full max-h-screen flex-col gap-2', className)}>
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Button variant="ghost" onClick={() => navigate('/dashboard')}
                className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span className="">Nutri App</span>
        </Button>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {sidebarLinks.map((link) => (
            <Button
              key={link.path}
              variant={location.pathname === link.path ? 'secondary' : 'ghost'}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              onClick={() => navigate(link.path)}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Button>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-4">
        <Card>
          <CardHeader className="p-2 pt-0 md:p-4">
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our support team.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
            <Button size="sm" className="w-full">
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Sidebar;
