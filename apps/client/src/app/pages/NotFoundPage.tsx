import React from 'react';
import { Button, AlertTitle, Alert, AlertDescription } from '@nutri/client-ui';

export const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Alert className="mb-4">
        <AlertTitle>404 - Not Found</AlertTitle>
        <AlertDescription>The page you're looking for doesn't exist.</AlertDescription>
      </Alert>
      <Button onClick={() => window.location.href = '/'}>Go to Home</Button>
    </div>
  );
};
