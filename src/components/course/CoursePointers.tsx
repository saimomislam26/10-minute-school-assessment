import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { DemoClassEngagement, Pointers } from "../../utils/courseDetailsType";
import { useEffect, useState } from "react";

export function CoursePointers() {
    const detailsState = useSelector((state: RootState) => state.details)
    
    const [checkListValue, setCheckListValue] = useState<Pointers | null>(null)
    
    useEffect(() => {
        if (!checkListValue) {
            setCheckListValue(detailsState.section.pointers)
        }
    }, [])

    return (
        <div className="w-full">
        <div className="pt-4 md:mx-16 mx-10">
          <h2 className="text-xl font-semibold md:text-2xl ">
          What you will learn by doing the course
          </h2>
        </div>
        <div className="border md:w-[50%] md:mx-16 mx-10 bg-cover flex gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12 sm:mt-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {checkListValue?.values.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start p-6 "
                >
                  <span className="text-xl text-blue-500">&#10003;</span>
                  <div>
                    <p className="text-sm ml-4">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}