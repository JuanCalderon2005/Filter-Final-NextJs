'use client';
import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

interface ButtonProps {
  icon?: string;
  type?: 'button' | 'submit' | 'reset';
  label: string;
  className?: string;
  onClick?: () => void;
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4338ca;
  }

  .icon {
    font-size: 1.25rem;
  }
`;

const Button: React.FC<ButtonProps> = ({ icon, type = 'button', label, className, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick} className={className}>
      {icon && <Icon icon={icon} className="icon" />}
      {label}
    </StyledButton>
  );
};

export default Button;
