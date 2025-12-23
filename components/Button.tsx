import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  icon?: 'arrow' | 'play';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon, 
  className = '',
  onClick,
  href
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-white pl-6 pr-2 py-2 hover:bg-primary-dark",
    secondary: "bg-secondary text-primary pl-6 pr-2 py-2 hover:bg-yellow-400",
    outline: "border-2 border-primary text-primary pl-6 pr-2 py-2 hover:bg-primary hover:text-white",
    dark: "bg-white text-primary pl-6 pr-2 py-2 hover:bg-gray-100", // Usually on dark background
  };

  const iconBase = "ml-3 p-2 rounded-full flex items-center justify-center h-10 w-10 transition-transform duration-300 group-hover:translate-x-1";
  
  const iconVariants = {
    primary: "bg-secondary text-primary",
    secondary: "bg-white text-primary",
    outline: "bg-primary text-white group-hover:bg-white group-hover:text-primary",
    dark: "bg-secondary text-primary",
  };

  const content = (
    <>
      <span>{children}</span>
      {(icon === 'arrow' || icon === 'play') && (
        <span className={`${iconBase} ${iconVariants[variant]}`}>
          {icon === 'arrow' ? <ArrowRight size={18} /> : <Play size={18} fill="currentColor" />}
        </span>
      )}
    </>
  );

  if (href) {
    // If it's an internal link (starts with / but not hash link), use Link
    if (href.startsWith('/') && !href.startsWith('/#')) {
      return (
        <Link to={href} className={`${baseStyles} ${variants[variant]} group ${className}`} onClick={onClick}>
          {content}
        </Link>
      );
    }
    
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} group ${className}`} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} group ${className}`} onClick={onClick}>
      {content}
    </button>
  );
};