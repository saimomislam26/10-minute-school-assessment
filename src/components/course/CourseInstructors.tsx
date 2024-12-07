import { useEffect, useState } from "react";
import { RootState } from "../../redux/store/store";
import { useSelector } from "react-redux";
import { Instructors } from "../../utils/courseDetailsType";

const CourseInstructors = () => {
  // Mock data for instructors
  const instructors = [
    {
      name: "Zawad Hasan Adib",
      image:
        "https://cdn.10ms.com/catalog/instructors/images/Zawad-Abid-1080x1080_1708605104798.jpg?w=73&h=73",
      bandScore: "8.0",
      experience: "6+ Years Exp",
    },
    {
      name: "Zawad Hasan Adib",
      image:
        "https://cdn.10ms.com/catalog/instructors/images/Zawad-Abid-1080x1080_1708605104798.jpg?w=73&h=73",
      bandScore: "8.0",
      experience: "6+ Years Exp",
    },
    {
      name: "Zawad Hasan Adib",
      image:
        "https://cdn.10ms.com/catalog/instructors/images/Zawad-Abid-1080x1080_1708605104798.jpg?w=73&h=73",
      bandScore: "8.0",
      experience: "6+ Years Exp",
    },
    {
      name: "Zawad Hasan Adib",
      image:
        "https://cdn.10ms.com/catalog/instructors/images/Zawad-Abid-1080x1080_1708605104798.jpg?w=73&h=73",
      bandScore: "8.0",
      experience: "6+ Years Exp",
    },
    {
      name: "Zawad Hasan Adib",
      image:
        "https://cdn.10ms.com/catalog/instructors/images/Zawad-Abid-1080x1080_1708605104798.jpg?w=73&h=73",
      bandScore: "8.0",
      experience: "6+ Years Exp",
    },
  ];

  const detailsState = useSelector((state: RootState) => state.details)

  const [checkListValue, setCheckListValue] = useState<Instructors | null>(null)

  // State to manage the number of visible instructors
  const [visibleCount, setVisibleCount] = useState(4);

  // Function to toggle "Show More" and "Show Less"
  const toggleInstructors = () => {
    setVisibleCount(visibleCount === 4 ? instructors.length : 4);
  };


  useEffect(() => {
    if (!checkListValue) {
      setCheckListValue(detailsState.section.instructors)
    }
  }, [])

  return (
    <div className="relative w-full" id="course-instructors">
      <div className="md:w-[50%] mx-10 md:mx-16 bg-cover  rounded-xl md:mb-12 sm:mt-10 mb-10 xs:bg-[#EEF2F4] xs:py-2 ">
        <div className="pt-4 pb-2 ">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl ">
            Course Instructors
          </h2>
        </div>
        <div className="grid border grid-cols-1 px-2 mb-4 lg:grid-cols-2 gap-4 relative w-full">
          {checkListValue && checkListValue.values.slice(0, visibleCount).map((instructor, index) => (
            <div
              key={index}
              className="flex items-start py-2 md:p-5 lg:pb-5 rounded-md"
            >
              <div className="mt-2 rounded-md w-[73px] h-[73px] relative overflow-hidden min-w-50">
                <div className="rounded-md overflow-hidden">
                  <img
                    alt={`Instructor ${instructor.name}`}
                    draggable="false"
                    loading="lazy"
                    width="73"
                    height="73"
                    className=""
                    src={instructor.image}
                  />
                </div>
              </div>
              <div className="flex-1 ml-3">
                <h3 className="text-lg font-medium">{instructor.name}</h3>
                <div className="text-sm">
                  {/* <p>
                  {instructor.description} <br />
                    <br />
                  </p> */}
                  <div dangerouslySetInnerHTML={{ __html: instructor.description }} />
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white px-4 py-1 border border-gray-300 rounded-2xl shadow z-30">
            <button
              onClick={toggleInstructors}
              className="text-sm font-medium text-blue-500"
            >
              {visibleCount === 4 ? "বিস্তারিত দেখুন" : "সংকুচিত করুন"}
            </button>
          </div>
        </div>

        {/* Button */}

      </div>
    </div>

  );
};

export default CourseInstructors;
