
import React from 'react';
import { Button } from '@nextui-org/react';

interface MyButtonProps {
  text: string;
  color?: string;
}

const MyButton: React.FC<MyButtonProps> = ({ text, color }) => {
  const buttonStyle = {
    backgroundColor: color || 'defaultColor',
  };

  return (
    <Button style={buttonStyle}>
      {text}
    </Button>
  );
}

export default MyButton;
