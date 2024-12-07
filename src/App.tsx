
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Navbar } from './components/Navbar';
import { CourseHeader } from './components/CourseHeader';

import CourseNavigation from './components/ui/CourseNavigation';
import CourseInstructors from './components/course/CourseInstructors';
import { FreeWebinar } from './components/course/FreeWebinar';
import Features from './components/course/CourseFeatures';
import ClassRoutine from './components/course/CourseRoutine';
import FreeItems from './components/course/FreeItems';
import CourseDetails from './components/course/CourseDetails';
import { useEffect, useState } from 'react';
import { getCourseDetails, getVariantDetails } from './lib/api';
import { AxiosError } from 'axios';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store/store';
import { setCourseVariant } from './redux/slices/courseSlice';
import { setCourseDetails } from './redux/slices/detailsSlice';
import { CoursePointers } from './components/course/CoursePointers';
import { CourseModal } from './components/CourseModal';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const fetchVariantDetails = async () => {
      try {
        const res = await getVariantDetails();
        dispatch(setCourseVariant(res.data.items[0]))
      } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) {
          console.log(error);
        } else {
          console.error('An unexpected error occurred:', error);
        }
      }
    };

    const fetchCourseDetails = async () => {
      setIsLoading(true)
      try {
        const res = await getCourseDetails();
        dispatch(setCourseDetails(res.data.sections))
      } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) {
          console.log(error);
        } else {
          console.error('An unexpected error occurred:', error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchCourseDetails()
    fetchVariantDetails();
  }, [])

  if (isLoading) {
    return (
      <div>Loading</div>
    )
  }
  return (

    !isLoading && <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <CourseHeader />
      </div>
      <div className='flex justify-center'>
        <div max-w-4xl w-full>
          <div className="sticky md:top-[65px] z-20 mt-[60px] w-[60%] hidden bg-white md:block container" >
            <div className=" relative">
              <div className="border-b border-gray-200 mb-6">
                <CourseNavigation />
              </div>
            </div>
            {/* </div> */}
          </div>

          <FreeWebinar />
          <CourseInstructors />
          <Features />
          <CoursePointers />
          <ClassRoutine />
          <FreeItems />
          {/* <CourseTestimonial/> */}
          <CourseDetails />
          <CourseModal />
        </div>

      </div>

      <Footer/>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
      />
    </div>
  );
}

export default App;