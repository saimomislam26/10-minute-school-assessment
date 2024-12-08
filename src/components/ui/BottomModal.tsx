import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { calculateTimeLeft } from "../../utils/countdown";

const BottomModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false); 
  const courseState = useSelector((state: RootState) => state.course)

  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (courseState.payment_end_at && courseState.payment_start_at) {
      setTime(calculateTimeLeft(courseState.payment_end_at!));
      
      const timer = setInterval(() => {
        setTime(calculateTimeLeft(courseState.payment_end_at!));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = 500;
      setIsVisible(scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Bottom Modal */}
      {isVisible && (
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg border-t p-4 md:hidden z-50 ">
          {/* Countdown Section */}
          <div className="absolute -top-3 left-[30%] transform -translate-x-1/2 bg-red-500 text-white text-center font-medium text-xs px-3 py-2 border-t-2 border-red-600 rounded-full w-auto shadow-md">
            Enrollment of the 10th Batch will end on: {`${time.days}:${time.hours}:${time.minutes}:${time.seconds}`}
          </div>

          {/* Modal Content */}
          <div className="flex flex-col justify-between">
            {/* Price Section */}
            <div className="flex items-center space-x-2 mt-4">
              <p className="font-bold text-black text-3xl">৳8500</p>
              <p className="text-lg line-through text-gray-500">৳10000</p>
              <p className="text-lg text-red-500 bg-red-100 px-2 py-1 rounded">
                1500৳ ছাড়
              </p>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              Batch 10: 6 January, 2025 - March 19, 2025
            </p>
          </div>

          {/* Enroll Button */}
          <button className="bg-green-500 text-white w-full mt-3 text-sm px-6 py-2 rounded-md font-medium">
            Enroll
          </button>
        </div>
      )}
    </>
  );
};

export default BottomModal;
