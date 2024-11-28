import React from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { cn } from '@nutri/client-utils';
import { Home, User, BookOpen, Banana, UsersRound, Cog, Workflow, FileEdit } from 'lucide-react';
import {
  Button,
} from '@nutri/client-ui';
import { LogoutButton } from '@nutri/client-auth';
import { useTableViewsStore } from '../hooks/useStore';
import { TableViewType } from '@nutri/client-gql';

type Link = { path: string, label: string, tableType?: TableViewType, icon: any }

const Sidebar = ({ className, width }: React.HTMLAttributes<HTMLDivElement> & { width: string }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const tableViews = useTableViewsStore();

  const sidebarLinks: Link[] = [
    { path: '/dashboard', label: 'Dashboard', icon: Home },
    { path: '/recipes', label: 'Recipes', icon: BookOpen, tableType: TableViewType.Recipes },
    { path: '/patients', label: 'Patients', icon: UsersRound, tableType: TableViewType.Patients },
    { path: '/tools', label: 'Assessment Tools', icon: FileEdit },
    { path: '/workflows', label: 'Patient Flows', icon: Workflow },
    {
      path: '/manual-reviews/matches',
      label: 'Manual Review',
      icon: Workflow,
      tableType: TableViewType.ManualReviews,
    },
  ];
  const sidebarBottomSectionLinks = [
    { path: '/profile', label: 'My Profile', icon: User },
    { path: '/settings', label: 'Settings', icon: Cog },
  ];

  const handleNavigate = ({ path, tableType }: Link) => {
    const newSearchParams = new URLSearchParams(searchParams);
    const currentPreset = newSearchParams.get('preset');

    const defaultPreset = tableType && tableViews.presetByType(tableType);
    console.log(' >>>>>>>>>@>  (defaultPreset)', defaultPreset);
    console.log(' >>>>>>>>>@>  (tableType)', tableType);


    if (defaultPreset && defaultPreset !== currentPreset) {
      newSearchParams.set('preset', defaultPreset);
    }

    navigate({ pathname: path, search: newSearchParams.toString() });
  };

  return (
    <div className={cn('flex h-full max-h-screen flex-col gap-2', className)}>
      <div className="flex min-h-14 items-center border-b px-3">
        <Button
          variant="ghost"
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 font-semibold"
        >
          <Banana className="h-6 w-6" />
          <span className="">NutriQ</span>
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
              onClick={() => handleNavigate(link)}
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
