import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { DemoClassEngagement } from "../../utils/courseDetailsType";
import { useEffect, useState } from "react";

export function FreeWebinar() {
  const detailsState = useSelector((state: RootState) => state.details)


  const [checkListValue, setCheckListValue] = useState<DemoClassEngagement | null>(null)

  useEffect(() => {
    if (!checkListValue) {
      setCheckListValue(detailsState.section.demoClassEngagement)
    }
  }, [])

  return (
    <div>
      <div id="demo_class_book_engagement w-[100%]">
        <div className=" md:w-[50%] md:mx-16 mx-10 bg-cover flex gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12 sm:mt-10" style={{ backgroundImage: `url(${checkListValue && checkListValue.values[0].background.image})` }}>
          <div className="w-full md:w-1/2">
            <img src={checkListValue?.values[0].top_left_icon_img} className="mb-4 h-[40px]" />
            <h2 className="text-xl font-semibold text-[#ffffff]" >{checkListValue?.values[0].title}</h2>
            <p className="mt-2 text-base text-[#f1eded]" >{checkListValue?.values[0].description}</p>
            <button className=" mb-4 bg-[#00A651] hover:bg-[#008c44] text-white py-1 mt-2 px-4 rounded text-lg font-medium">ফ্রি ডেমো ক্লাস বুক করুন</button>
          </div>
          <div className="items-center hidden w-1/2 md:flex">
            <img src={checkListValue?.values[0].thumbnail} height="200" />
          </div>
        </div>
      </div>
    </div>
  );
}