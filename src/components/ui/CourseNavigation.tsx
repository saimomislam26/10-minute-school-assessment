import  { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const CourseNavigation = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const items = [
    'Course Instructors',
    'How the course is laid out',
    'What you will learn by doing the course',
    'Course curriculum',
    'Course materials',
    'Live class schedule',
    'FAQ'
  ];

  const scroll = (direction:string) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className=''>

    <div className="relative flex items-center w-full px-12">
      <button 
        onClick={() => scroll('left')}
        className="absolute z-10 p-2 bg-white shadow-md rounded-full hover:bg-gray-50"
      >
        <FiChevronLeft className="text-gray-600" />
      </button>
      
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide mx-8 scroll-smooth"
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        {items.map((item, index) => (
          <button
            key={index}
            className={`whitespace-nowrap pb-2 px-1 border-b-2 transition-colors ${
              index === 0 
                ? 'text-green-600 border-green-600' 
                : 'text-gray-600 border-transparent hover:text-green-500 hover:border-green-500'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 z-10 p-2 bg-white shadow-md rounded-full hover:bg-gray-50"
      >
        <FiChevronRight className="text-gray-600" />
      </button>
    </div>
    </div>
  );
};

export default CourseNavigation;