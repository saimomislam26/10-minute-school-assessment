import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { Features as FeaturesType } from "../../utils/courseDetailsType";

const Features = () => {
 
  const detailsState = useSelector((state: RootState) => state.details)

  const [checkListValue, setCheckListValue] = useState<FeaturesType | null>(null)

  useEffect(() => {
    if (!checkListValue) {
      setCheckListValue(detailsState.section.features)
    }
  }, [])

  return (
    
    <div className="w-full">
      <div className="pt-4 md:mx-16 mx-10">
        <h2 className="text-xl font-semibold md:text-2xl ">
        How the course is laid out
        </h2>
      </div>
      <div className="bg-gray-900 text-white md:w-[50%] md:mx-16 mx-10 bg-cover flex gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12 sm:mt-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {checkListValue?.values.map((feature, index) => (
              <div
                key={index}
                className="flex items-start p-6 rounded-lg shadow-md"
              >
                <img  src={feature.icon}className="mr-4 w-7 h-7"/>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm">{feature.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
