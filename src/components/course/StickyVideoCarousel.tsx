import React from 'react';
import { InstructorCarousel } from './InstructorCarousel';

interface StickyVideoCarouselProps {
  isVisible: boolean;
}

export function StickyVideoCarousel({ isVisible }: StickyVideoCarouselProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed top-24 right-6 w-[400px] bg-white rounded-lg shadow-xl p-4 transition-all duration-300 ease-in-out">
      <InstructorCarousel />
    </div>
  );
}