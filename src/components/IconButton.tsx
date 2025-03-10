import React from 'react';

interface IconButtonProps {
    icon: React.JSX.Element;
  }
  
 export const IconButton: React.FC<IconButtonProps> = ({ icon }) => {
    return <>{icon}</>;
  };