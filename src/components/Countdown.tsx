import { useEffect, useState } from 'react';
import { calculateTimeLeft } from '../utils/countdown';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

export function Countdown() {
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

  return (
    <div className="flex gap-4">
      {Object.entries(time).map(([key, value]) => (
        <div key={key} className="text-center">
          <span className="conut flex items-center justify-center text-2xl md:text-4xl">
            {String(value).padStart(2, '0')}
          </span>
          <p className="text-xs text-gray-400 mt-1 capitalize">{key}</p>
        </div>
      ))}
    </div>
  );
}