import React from 'react';
import { Button } from '@nextui-org/react';

interface BannerProps {
  text: string;
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

const Banner: React.FC<BannerProps> = ({ text, color = 'default' }) => {
  return (
    <Button color={color}>
      {text}
    </Button>
  );
}

export default Banner;
