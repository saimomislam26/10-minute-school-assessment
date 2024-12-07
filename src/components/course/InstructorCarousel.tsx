import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const instructors = [
  { id: 1, image: '/instructor1.jpg', name: 'Sarah Johnson' },
  { id: 2, image: '/instructor2.jpg', name: 'Emily Parker' },
  { id: 3, image: '/instructor1.jpg', name: 'Michael Brown' },
  { id: 4, image: '/instructor2.jpg', name: 'Jessica Lee' },
  { id: 5, image: '/instructor1.jpg', name: 'David Wilson' },
];

export function InstructorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % instructors.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + instructors.length) % instructors.length);
  };

  return (
    <div className="relative bg-red-900 rounded-lg overflow-hidden">
      <div className="relative aspect-[16/9]">
        <div className="flex">
          {instructors.slice(currentIndex, currentIndex + 5).map((instructor) => (
            <div key={instructor.id} className="w-1/5 p-1">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full aspect-square object-cover rounded"
              />
              <p className="text-white text-xs text-center mt-1">{instructor.name}</p>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <Play className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        <img src="/thumbnail1.jpg" alt="" className="w-16 h-10 rounded border border-white" />
        <img src="/thumbnail2.jpg" alt="" className="w-16 h-10 rounded border border-white" />
        <img src="/thumbnail3.jpg" alt="" className="w-16 h-10 rounded border border-white" />
      </div>
    </div>
  );
}