'use client';
import React from 'react';
import { Icon } from '@iconify/react';

interface IconAtomProps {
  icon: string;
  size?: string | number;
  color?: string;
  className?: string;
}

const IconAtom: React.FC<IconAtomProps> = ({ icon, size = 24, color = 'currentColor', className }) => {
  return (
    <Icon
      icon={icon}
      style={{ fontSize: size, color }}
      className={className}
    />
  );
};

export default IconAtom;
