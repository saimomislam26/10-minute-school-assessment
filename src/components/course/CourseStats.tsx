import { useEffect, useState } from 'react';
import { ChecklistMetaValue, MetaItem } from '../../utils/type';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

const CourseStats = () => {

  const courseState = useSelector((state: RootState) => state.course)

  const [checkListValue, setCheckListValue] = useState<ChecklistMetaValue[] | null>(null)

  const getChecklistIndex = (meta: MetaItem[]) => {
    const index = meta.findIndex((item) => item.key === "checklist");
    if (index !== -1) {
      return meta[index].values as ChecklistMetaValue[];
    }
    return null;
  };

  useEffect(() => {
    if (!checkListValue) {
      const checklistValues = getChecklistIndex(courseState.meta);
      if (checklistValues) {
        setCheckListValue(checklistValues);
      } else {
        console.error("Checklist key not found in meta.");
      }
    }
  }, [])

  return (
    <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 mt-4 mb-6">
      {
        checkListValue && checkListValue.map((item, index) => {
          return (
            <div key={index} className="flex items-center col-auto gap-2 py-1 text-white">
              <img src={item.icon} alt={item.icon} className="w-8 h-8" />
              <span className='text-base md:text-lg flex-1'>{item.meta_value}</span>
            </div>
          )
        })
      }
    </div>
  );
};

export default CourseStats;