import React from 'react';
import {  AlertTitle, Alert, AlertDescription } from '@nutri/client-ui';

export const MaintenancePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Alert className="mb-4">
        <AlertTitle>Site Under Maintenance</AlertTitle>
        <AlertDescription>We're currently performing some updates. Please check back soon.</AlertDescription>
      </Alert>
    </div>
  );
};
