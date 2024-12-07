
import Slider from "../ui/Slider"
const CourseTestimonial = () => {

    return (
        <div className="w-full">
        <div className="pt-4 md:mx-16 mx-10">
          <h2 className="text-xl font-semibold md:text-2xl">
            What you will learn by doing the course
          </h2>
        </div>
        <div className="border md:w-[50%] md:mx-16 mx-10 bg-cover flex gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12 sm:mt-10">
          <div className="container mx-auto">
            <Slider />
          </div>
        </div>
      </div>
    )
}

export default CourseTestimonial