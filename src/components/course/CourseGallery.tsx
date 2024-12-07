import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function CourseGallery() {
  return (
    <div className="relative mb-6">
      <div className="relative">
        <img 
          src="/ielts-batch.jpg"
          alt="IELTS Course"
          className="w-full aspect-video object-cover rounded-lg"
        />
        <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
        <img src="/thumbnail1.jpg" alt="" className="w-16 h-12 rounded border-2 border-white" />
        <img src="/thumbnail2.jpg" alt="" className="w-16 h-12 rounded border-2 border-white" />
        <img src="/thumbnail3.jpg" alt="" className="w-16 h-12 rounded border-2 border-white" />
      </div>
    </div>
  );
}