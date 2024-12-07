import { useEffect, useState } from 'react';
import { CourseFeatures } from './course/CourseFeaturesModal';
import { PriceTag } from './course/PriceTag';
import { Button } from './ui/Button';

export function CourseModal() {
  const [modalTop, setModalTop] = useState(150); // Initial top value when page is scrolled
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer');
      const modal = document.getElementById('sticky-modal');

      // Prevent the modal from scrolling when it's within the footer's region
      if (footer && modal) {
        const footerRect = footer.getBoundingClientRect();
        const modalRect = modal.getBoundingClientRect();

        if (window.scrollY >= 150) {
          if (modalRect.bottom > footerRect.top) {
            // Stop the modal when it reaches the footer, keeping it above the footer
            setModalTop(footerRect.top - modalRect.height - 10); // 10px gap before footer
          } else {
            // Keep modal 32px from the top when it's not near the footer
            setModalTop(150);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup event listener
    };

  }, []);
  return (
    <div
      id="sticky-modal"
      className="bg-white rounded-lg shadow-xl md:w-[200px] lg:w-[350px] fixed right-20  hidden md:block overflow-hidden"
      style={{
        top: `${modalTop}px`,
        maxHeight: "calc(100vh - 8rem)",
      }}
    >
      <div className="p-6">
        <PriceTag currentPrice={8500} originalPrice={10000} discount={1500} />
        <div className="text-sm text-gray-600 mb-4">
          Batch 10: 6 January, 2025 - March 19, 2025
        </div>
        <Button className="w-full mb-4 bg-[#00A651] hover:bg-[#008c44] text-white py-3 text-lg font-medium">
          Enroll
        </Button>
        <div className="text-orange-500 text-sm mb-6">
          Enrollment of the 10th Batch will end on: 6 January, 2025
        </div>
        <CourseFeatures />
      </div>
    </div>
  );
}