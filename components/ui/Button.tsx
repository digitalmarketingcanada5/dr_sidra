import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'dark';
  className?: string;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  href, 
  children, 
  variant = 'primary', 
  className = '',
  external = false,
  type,
  onClick,
  disabled = false
}) => {
  const baseStyle = 'inline-block px-8 py-3 rounded-md text-center font-medium transition-colors duration-300';
  const styles = {
    primary: 'bg-[#5DBDC4] text-white hover:bg-[#4da9af] disabled:opacity-50 disabled:cursor-not-allowed',
    outline: 'border-2 border-[#5DBDC4] text-[#5DBDC4] hover:bg-[#5DBDC4] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed',
    dark: 'bg-[#2C3E50] text-white hover:bg-[#34495e] disabled:opacity-50 disabled:cursor-not-allowed',
  };

  const combinedClassName = `${baseStyle} ${styles[variant]} ${className}`;

  // If type or onClick is provided, render as button
  if (type || onClick) {
    return (
      <button 
        type={type || 'button'}
        onClick={onClick}
        className={combinedClassName}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

  // If no href, render as button (fallback)
  if (!href) {
    return (
      <button 
        type="button"
        className={combinedClassName}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

  if (external) {
    return (
      <a 
        href={href} 
        className={combinedClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClassName}>
      {children}
    </Link>
  );
};
