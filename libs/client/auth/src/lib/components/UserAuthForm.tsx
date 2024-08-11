import React, { useEffect, useState } from 'react';
import { LoaderCircle } from 'lucide-react';
import { Alert, Button, Input, Label } from '@nutri/client-ui';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { cn } from '@nutri/client-utils';
import { useNavigate } from 'react-router-dom';
import gh from './../../../assets/logos/github-mark.svg';
import { useAuth } from '@nutri/client-auth';


export function UserAuthForm({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login, refreshToken, isAuthenticated } = useAuth();

  useEffect(() => {
    const attemptAutoLogin = async () => {
      try {
        const token = await refreshToken();
        if (token) {
          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Auto-login failed:', error);
      }
    };

    if (!isAuthenticated) {
      setIsLoading(true);
      attemptAutoLogin();
    }

    if (isAuthenticated) {
      navigate('/dashboard');
    }
    setIsLoading(false);
  }, [refreshToken, navigate, isAuthenticated]);


  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (error) {
      setError('Login failed. Please try again.');
    }
    setIsLoading(false);
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="name@example.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Email
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          {error && <Alert>
            {error}
          </Alert>}
          <Button disabled={isLoading} variant='outline'>
            {isLoading && (
              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <img src={gh} alt='' className='size-3 mr-1'/>
        )}{' '}
        GitHub
      </Button>
    </div>
  );
}
