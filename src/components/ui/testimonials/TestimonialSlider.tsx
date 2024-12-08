import React from 'react';
import Slider from 'react-slick';
import { TestimonialCard } from './TestimonialCard';
import { NavigationArrow } from './NavigationArrow';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TestimonialSliderProps } from '../../../types/testimonial';

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <NavigationArrow direction="prev" />,
    nextArrow: <NavigationArrow direction="next" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-screen" >
      <div className="pt-4 md:mx-16 mx-10">
        <h2 className="text-xl font-semibold md:text-2xl ">
        Students opinion
        </h2>
      </div>
      <div className="md:w-[50%] md:mx-16 mx-10 bg-cover gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12 sm:mt-10 ">
        <div className="container mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};