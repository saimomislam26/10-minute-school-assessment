import React from 'react';
import Slider from 'react-slick';
import { SliderCard } from './SliderCard';
import { CustomArrow } from './CustomArrow';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderProps } from '../../../types/slider';

export const StudentSlider: React.FC<SliderProps> = ({ students }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="relative max-w-6xl mx-auto px-8">
      <Slider {...settings}>
        {students.map((student) => (
          <SliderCard key={student.id} student={student} />
        ))}
      </Slider>
    </div>
  );
};