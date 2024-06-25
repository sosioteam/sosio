
import React from 'react';
import { Button } from '@nextui-org/react';

interface bannerProps {
  text: string;
  color?: string;
}

const banner: React.FC<bannerProps> = ({ text, color }) => {
  const bannerStyle = {
  };

  return (
    <Button style={bannerStyle}>
    </Button>
  );
}

export default banner;
