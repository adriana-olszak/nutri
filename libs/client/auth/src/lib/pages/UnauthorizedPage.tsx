import React from 'react';

import { Alert, AlertDescription, AlertTitle, Button } from '@nutri/client-ui';

export const UnauthorizedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Alert className="mb-4">
        <AlertTitle>Unauthorized</AlertTitle>
        <AlertDescription>You don't have permission to access this page.</AlertDescription>
      </Alert>
      <Button onClick={() => window.location.href = '/'}>Go to Home</Button>
    </div>
  );
};
