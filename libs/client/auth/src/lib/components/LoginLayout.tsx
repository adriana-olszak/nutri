import { Button } from '@nutri/client-ui';
import './styles.scss';
import { ReactNode, useLayoutEffect, useRef } from 'react';
import { Banana } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export const LoginLayout = ({ children }: { children: ReactNode }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const blobRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useLayoutEffect(() => {
    const container = containerRef.current;
    const blob = blobRef.current;

    if (!container || !blob) return;

    const updateBlobPosition = (event: { clientX: any; clientY: any }) => {
      const { clientX, clientY } = event;
      const rect = container?.getBoundingClientRect();

      const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
      const y = Math.min(Math.max(clientY - rect.top, 0), rect.height);

      blob?.animate(
        {
          left: `${x}px`,
          top: `${y}px`,
        },
        { duration: 3000, fill: 'forwards' },
      );
    };

    container?.addEventListener('pointermove', updateBlobPosition);

    return () => {
      container?.removeEventListener('pointermove', updateBlobPosition);
    };
  }, []);

  return (
    <div className="container h-full relative  flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      {location.pathname === '/login' && (
        <Button
          variant={'ghost'}
          className="absolute right-4 top-4 md:right-8 md:top-8"
          onClick={() => navigate('/register')}
        >
          Register
        </Button>
      )}
      {location.pathname === '/register' && (
        <Button
          variant={'ghost'}
          className="absolute right-4 top-4 md:right-8 md:top-8"
          onClick={() => navigate('/login')}
        >
          Login
        </Button>
      )}

      <div
        ref={containerRef}
        className="relative hidden h-full  flex-col bg-black text-white dark:border-r lg:flex overflow-hidden"
      >
        <div ref={blobRef} id="blob"></div>
        <div
          id="blur"
          className="absolute backdrop-filter backdrop-blur-md"
        ></div>
        <div className="absolute inset-0  opacity-90" />
        <div className="relative p-10 z-20 flex items-center text-lg font-medium">
          <Banana className="mr-1" />
          BalancedBite
        </div>
        <div className="p-10 relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg italic font-light">
              "DietDraft has revolutionized my dietitian practice. It's cut my
              meal planning time in half and allowed me to create personalized,
              nutritious plans for my clients with just a few clicks. This app
              is a game-changer for any nutrition professional!"
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              {location.pathname === '/login'
                ? 'Welcome back to BalancedBite'
                : 'Join BalancedBite Today'}
            </h1>
            <p className="text-sm text-muted-foreground">
              {location.pathname === '/login'
                ? 'Log in to access your personalized nutrition tools'
                : 'Create your account and start crafting perfect meal plans with ease'}{' '}
            </p>
          </div>
          {children}
          <p className="px-8 text-center text-sm text-gray-500">
            By clicking continue, you agree to our{' '}
            <div className="flex items-center justify-center ">
              <Button
                variant={'link'}
                className="px-1 underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Button>{' '}
              and{' '}
              <Button
                variant={'link'}
                className="px-1 underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Button>
              .
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};
