import { Button } from '@nutri/client-ui';
import { UserAuthForm } from '../components/UserAuthForm';
import './styles.scss'
import {useLayoutEffect, useRef} from "react";
export const AuthenticationPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const blobRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const blob = blobRef.current;

    if (!container || !blob) return;

    const updateBlobPosition = (event) => {
      const { clientX, clientY } = event;
      const rect = container?.getBoundingClientRect();

      const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
      const y = Math.min(Math.max(clientY - rect.top, 0), rect.height);

      blob?.animate({
        left: `${x}px`,
        top: `${y}px`
      }, { duration: 3000, fill: "forwards" });
    };

    container?.addEventListener('pointermove', updateBlobPosition);

    return () => {
      container?.removeEventListener('pointermove', updateBlobPosition);
    };
  }, []);

  return (
    <div className="container h-full relative hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Button
        variant={'ghost'}
        className="absolute right-4 top-4 md:right-8 md:top-8"
      >
        Login
      </Button>

      <div ref={containerRef} className="relative hidden h-full flex-col bg-black text-white dark:border-r lg:flex overflow-hidden">
        <div ref={blobRef} id="blob"></div>
        <div id="blur" className="absolute inset-0 backdrop-filter backdrop-blur-md"></div>
        <div className="absolute inset-0  opacity-90" />
        <div className="relative p-10 z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          DietDraft
        </div>
        <div className="p-10 relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg italic font-light">
              "DietDraft has revolutionized my dietitian practice. It's cut my meal planning time in half and
              allowed me to create personalized, nutritious plans for my clients with just a few clicks.
              This app is a game-changer for any nutrition professional!"
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center">
              By clicking continue, you agree to our{' '}
            <div className='flex items-center justify-center '>
              <Button variant={'link'}
                      className="px-1 underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Button>{' '}
              and{' '}
              <Button variant={'link'}
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
}
