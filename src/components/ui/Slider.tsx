import React, { useState } from 'react';

// Sample images for the slider
const cardData = [
    {
      name: "Mohammad Rafi",
      bandScore: 8,
      image: "https://via.placeholder.com/150",
      description: "Instructor with 8 Band Score"
    },
    {
      name: "Yeamin Farabi",
      bandScore: 7,
      image: "https://via.placeholder.com/150",
      description: "Instructor with 7 Band Score"
    },
    {
      name: "John Doe",
      bandScore: 9,
      image: "https://via.placeholder.com/150",
      description: "Instructor with 9 Band Score"
    },
    {
      name: "Jane Smith",
      bandScore: 6,
      image: "https://via.placeholder.com/150",
      description: "Instructor with 6 Band Score"
    },
    {
      name: "Robert White",
      bandScore: 7,
      image: "https://via.placeholder.com/150",
      description: "Instructor with 7 Band Score"
    }
  ];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show two cards at a time on md and larger screens, 1 card on smaller screens
  const cardsPerSlide = 2; // Change this number if you want more cards per slide

  // Move to the next set of cards
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + cardsPerSlide) % cardData.length
    );
  };

  // Move to the previous set of cards
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - cardsPerSlide : prevIndex - cardsPerSlide
    );
  };

  return (
    <div className="relative w-full">
    {/* Slider Container */}
    <div
      className="flex transition-transform duration-500 ease-in-out"
      style={{
        transform: `translateX(-${(currentIndex * 100) / cardsPerSlide}%)`,
      }}
    >
      {/* Cards */}
      {cardData.map((card, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-2"
        >
          <div className="rounded-lg overflow-hidden shadow-lg bg-white">
            {/* Card Header (Image) */}
            <div className="relative">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-[200px] object-cover"
              />
              <div className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-lg">
                <span className="text-black font-bold">🎥</span>
              </div>
            </div>

            {/* Card Footer (Details) */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{card.name}</h3>
              <p className="text-sm text-gray-600">Band Score: {card.bandScore}</p>
              <p className="text-xs text-gray-500">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Navigation Arrows */}
    <button
      onClick={prevSlide}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black p-2 rounded-full shadow-lg hover:bg-gray-700 hidden md:block"
    >
      &#8592;
    </button>
    <button
      onClick={nextSlide}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black p-2 rounded-full shadow-lg hover:bg-gray-700 hidden md:block"
    >
      &#8594;
    </button>
  </div>
  );
};

export default Slider;
