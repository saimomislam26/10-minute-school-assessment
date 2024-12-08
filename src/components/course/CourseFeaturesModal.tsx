import React, { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

const courseFeatures = [
  '36 LIVE Classes (50 mins lecture+ 30 mins Q/A)',
  '8 Practice Reading Mock Test',
  '8 Practice Listening Mock Test',
  '2 Complete Mock Test',
  '10 Full Mock Test Questions to practice at home',
  '1:1 Consultation Sessions from Mentors',
  'Facebook Support Group',
  'Course Validity 12 Months'
];

interface CheckList{
  color: string,
  icon: string,
  id: string,
  list_page_visibility: string,
  text: string
}

export function CourseFeatures() {

  const detailsState = useSelector((state: RootState) => state.details)

  const [checkListValue, setCheckListValue] = useState<CheckList[] | null>(null)

  useEffect(() => {
    if (!checkListValue) {
      setCheckListValue(detailsState.checkList)
    }
  }, [])

  return (
    <div className="space-y-4">
      <h3 className="font-medium text-lg">এই কোর্সে যা থাকছে</h3>
      <div className="space-y-3">
        {checkListValue && checkListValue.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            {/* <CheckCircle2 className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" /> */}
            <img src={feature.icon} alt="icon" className='w-5 h-5'/>
            <span className="text-sm text-gray-600">{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}