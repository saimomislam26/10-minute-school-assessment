import { useEffect, useState } from 'react';
import { Countdown } from './Countdown';
import CourseStats from './course/CourseStats';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import { MetaItem, TimerMetaValue } from '../utils/type';


export function CourseHeader() {
  const courseState = useSelector((state: RootState) => state.course)

  const [timerValue, setTimerValue] = useState<TimerMetaValue[] | null>(null)

  const getChecklistIndex = (meta: MetaItem[]) => {
    const index = meta.findIndex((item) => item.key === "timer");
    if (index !== -1) {
      return meta[index].values as TimerMetaValue[];
    }
    return null;
  };

  useEffect(() => {
    if (!timerValue) {
      const timerValues = getChecklistIndex(courseState.meta);
      if (timerValues) {
        setTimerValue(timerValues);
      } else {
        console.error("timer key not found in meta.");
      }
    }
  }, [])

  return (
    <div className="bg-[url('https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg')] bg-cover bg-center text-white py-16 md:px-16 md:min-h-300 lg:min-h-900 w-full">

      <div className="container mx-auto px-4">
        <div className="flex items-start justify-between">
          <div className="w-[60%]">
            <img src={'https://cdn.10minuteschool.com/images/live_icon_1712036077434.png'} alt="live batch" className='w-20'/>
            <h1 className="text-white mb-2 text-[21px] font-semibold md:text-4xl">IELTS LIVE Batch</h1>
            <p className="text-gray-400 white-space: pre-wrap; overflow:hidden;height:auto;mask-image:none mt-4">
              Get the best IELTS preparation with direct guidance and feedback from the country's top IELTS
              instructors, all in one course. With this live course, learn hands-on techniques for Listening,
              Reading, Writing, and Speaking. Join our live batch now to achieve your desired IELTS score in
              just 12 weeks.
            </p>
            <CourseStats />
          </div>
        </div>
        <div >
          <p className="text-gray-400 mb-2">{timerValue && timerValue[0].text}</p>
          <Countdown />
        </div>
      </div>
    </div>
  );
}