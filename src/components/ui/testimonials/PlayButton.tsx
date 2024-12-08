import React from 'react';

export const PlayButton: React.FC = () => {
  return (
    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <div className="bg-white rounded-full p-4 shadow-lg hover:bg-gray-50 transition-colors duration-200">
        <svg 
          className="w-8 h-8 text-gray-800" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </button>
  );
};