import React from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/app/components/ui/alert';
import { RocketIcon, X } from 'lucide-react';

interface AlertLoginProps {
  text: React.ReactNode;
}

export const AlertLogin: React.FC<AlertLoginProps> = ({ text, ...props }) => {
  return (
    <div>
      <Alert className='bg-white text-black border-2 rounded'>
        <X />
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Atenção!</AlertTitle>
        <AlertDescription>
          {text}
        </AlertDescription>
      </Alert>
    </div>
  )
}
