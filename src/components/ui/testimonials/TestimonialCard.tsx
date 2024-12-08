import React from 'react';
import { PlayButton } from './PlayButton';
import { TestimonialCardProps } from '../../../types/testimonial';

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="px-3 py-3 border shadow-md rounded ml-5">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="relative aspect-video">
          <img 
            src={testimonial.imageUrl} 
            alt={`${testimonial.name}'s testimonial`}
            className="w-full h-full object-cover"
          />
          <PlayButton />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/0" />
        </div>
        <div className="p-4">
          <div className="flex items-center space-x-3">
            <img 
              src={testimonial.avatarUrl} 
              alt={testimonial.name}
              className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
            />
            <div>
              <h3 className="font-semibold text-gray-800">
                {testimonial.name} (Band Score: {testimonial.bandScore})
              </h3>
              <p className="text-gray-600 text-sm">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};