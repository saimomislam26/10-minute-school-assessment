import React from 'react';
import { clsx } from 'clsx';

interface ArrowProps {
  className?: string;
  onClick?: () => void;
  direction: 'prev' | 'next';
}

export const CustomArrow: React.FC<ArrowProps> = ({ className, onClick, direction }) => {
  return (
    <button
      className={clsx(
        'absolute top-1/2 transform -translate-y-1/2 z-10',
        'bg-white rounded-full p-2 shadow-lg',
        'hover:bg-gray-100 transition-colors duration-200',
        direction === 'prev' ? 'left-0 -ml-5' : 'right-0 -mr-5',
        className
      )}
      onClick={onClick}
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