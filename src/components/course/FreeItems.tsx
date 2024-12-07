import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { CourseInfo } from "../../utils/courseDetailsType";

const FreeItems = () => {
    const detailsState = useSelector((state: RootState) => state.details)

  const [checkListValue, setCheckListValue] = useState<CourseInfo | null>(null)
 
  useEffect(() => {
    if (!checkListValue) {
      setCheckListValue(detailsState.section.courseInfo)
    }
  }, [])
    return (
        <div className="w-full" id='free-items'>
            <div className="pt-4 md:mx-16 mx-10">
                <h2 className="text-xl font-semibold md:text-2xl ">
                    Free items with this products-
                </h2>
            </div>
            <div className="bg-[url('https://cdn.10minuteschool.com/images/banner_background_1731401239364.png')] md:w-[50%] md:mx-16 mx-10 bg-cover flex gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12 sm:mt-10">
                <div className="container mx-auto">
                    <div className="rounded-xl w-full h-full z-[1] border-2 border-white px-6 py-2 ">

                        {/* Top Section */}
                        <div className="flex flex-wrap md:flex-nowrap items-center justify-between text-white">
                            {/* Left Content */}
                            <div className="md:w-2/3 mb-6 md:mb-0">
                                <h2 className="text-xl font-bold mb-4">ঘরে বসে IELTS প্রস্তুতি (Hardcopy Book)</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>360 পৃষ্ঠা</li>
                                    <li>প্রিমিয়াম হার্ডকপি</li>
                                    <li>ফ্রি ডেলিভারি</li>
                                    <li>৪ কর্মদিবসের মধ্যে সারাদেশে ডেলিভারি</li>
                                </ul>
                            </div>

                            {/* Right Image */}
                            <div className="md:w-1/3 w-full flex justify-center w-120 h-120">
                                <img
                                    src="https://cdn.10minuteschool.com/images/catalog/media/Book_Image_1731924602665.png?w=120&h=150"
                                    alt="Hardcopy Book"
                                />
                            </div>
                        </div>

                        <hr className="my-6 border-dashed border-gray-300" />

                        {/* Bottom Section */}
                        <div className="flex flex-wrap md:flex-nowrap items-center justify-between text-white">
                            {/* Left Content */}
                            <div className="md:w-2/3 mb-6 md:mb-0">
                                <h2 className="text-xl font-bold mb-4">English Foundation Course</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>৫টি Videos</li>
                                    <li>
                                        IELTS প্রস্তুতির জন্য Basic to Advanced স্তরের বিভিন্ন Grammar এর
                                        গুরুত্বপূর্ণ টপিকসমূহ
                                    </li>
                                    <li>অভিজ্ঞ শিক্ষকমণ্ডলী</li>
                                </ul>
                            </div>

                            {/* Right Image */}
                            <div className="md:w-1/3 w-full flex justify-center w-120 h-120">
                                <img
                                    src="https://cdn.10minuteschool.com/images/thumbnails/english-foundation-course-sqr-new.jpg?w=120&h=150"
                                    alt="English Foundation Course"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeItems;
