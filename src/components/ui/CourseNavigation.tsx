import  { useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const CourseNavigation = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  
  const items = [
    { label: "Course Instructors", id: "course-instructors" },
    { label: "How the course is laid out", id: "course-layout" },
    { label: "What you will learn by doing the course", id: "course-learn" },
    { label: "Class Routine", id: "class-routine" },
    { label: "Free Items With this Product", id: "free-items" },
    { label: "Course Details", id: "course-details" },
    { label: "FAQ", id: "faq" },
  ];

  const scroll = (direction:string) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (id: string, index: number) => {
    setActiveIndex(index); 
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -110; // Offset to scroll 10px above the section
      const yPosition = section.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: "smooth",
      });
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
              onClick={() => handleScrollToSection(item.id, index)} // Scroll to specific section
              className={`whitespace-nowrap pb-2 px-1 border-b-2 transition-colors ${
                index === activeIndex
                  ? "text-green-600 border-green-600"
                  : "text-gray-600 border-transparent hover:text-green-500 hover:border-green-500"
              }`}
            >
              {item.label}
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