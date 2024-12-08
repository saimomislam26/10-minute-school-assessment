import React from 'react';
import { clsx } from 'clsx';

interface NavigationArrowProps {
  direction: 'prev' | 'next';
  onClick?: () => void;
  className?: string;
}

export const NavigationArrow: React.FC<NavigationArrowProps> = ({ 
  direction, 
  onClick, 
  className 
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'absolute top-1/2 transform -translate-y-1/2',
        'bg-white rounded-full w-10 h-10 shadow-lg',
        'flex items-center justify-center',
        'hover:bg-gray-50 transition-colors duration-200',
        direction === 'prev' ? '-left-5' : '-right-5',
        className
      )}
    >
      {direction === 'prev' ? (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      ) : (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );
};