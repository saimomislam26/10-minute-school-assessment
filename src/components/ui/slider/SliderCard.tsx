import React from 'react';
import { Student } from '../../../types/slider';

interface SliderCardProps {
  student: Student;
}

export const SliderCard: React.FC<SliderCardProps> = ({ student }) => {
  return (
    <div className="px-2">
      <div className="relative">
        <img 
          src={student.imageUrl} 
          alt={student.name}
          className="w-full rounded-lg"
        />
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white rounded-full p-4 shadow-lg">
            <svg 
              className="w-8 h-8 text-gray-800" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      </div>
      <div className="flex items-center mt-4 space-x-3">
        <img 
          src={student.thumbnailUrl} 
          alt={student.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-gray-800">
            {student.name} (Band Score: {student.bandScore})
          </h3>
          <p className="text-gray-600">{student.role}</p>
        </div>
      </div>
    </div>
  );
};