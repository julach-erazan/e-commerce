import React, { useState, useEffect } from "react";

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  const prevBtn = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextBtn = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-full bg-[red] overflow-hidden">
      <ul className="relative w-[100px] h-[100px] flex justify-evenly items-center">
        {images.map((imageURL, index) => (
          <li
            key={index}
            className={`w-full h-full absolute top-0 left-full transition-transform duration-500 transform translate-x-full ${
              index === currentImageIndex
                ? "translate-x-0"
                : index < currentImageIndex
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          >
            <img
              src={imageURL}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </li>
        ))}
      </ul>
      <button
        onClick={prevBtn}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-l-lg"
      >
        Prev
      </button>
      <button
        onClick={nextBtn}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-r-lg"
      >
        Next
      </button>
    </div>
  );
};

export default ImageCarousel;
