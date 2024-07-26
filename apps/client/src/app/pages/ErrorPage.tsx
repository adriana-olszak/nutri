import React from 'react';
import { Button, AlertTitle, Alert, AlertDescription } from '@nutri/client-ui';

export const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Alert className="mb-4">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>An unexpected error occurred. Please try again later.</AlertDescription>
      </Alert>
      <Button onClick={() => window.location.href = '/'}>Go to Home</Button>
    </div>
  );
};
