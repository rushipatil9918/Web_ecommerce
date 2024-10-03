import React, { useRef } from "react"
const Container = () => {
  const Cloths = [
    {
      id: 1,
      title: "Abort",
      price: 19.19,
      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/l08gsy80/shoe/n/a/n/9-assg1015-9-abros-l-grey-maroon-original-imagc2m9zbzmtybx.jpeg?q=70",
      description: "SM 676 Running Shoes For Men (Green, 8)",
    },
    {
      id: 2,
      title: "Blue Shoes",
      price: 29.99,
      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/l08gsy80/shoe/n/a/n/9-assg1015-9-abros-l-grey-maroon-original-imagc2m9zbzmtybx.jpeg?q=70",
      description: "SM 676 Running Shoes For Men (Blue, 9)",
    },
    {
      id: 3,
      title: "Green Shoes",
      price: 39.99,
      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/l08gsy80/shoe/n/a/n/9-assg1015-9-abros-l-grey-maroon-original-imagc2m9zbzmtybx.jpeg?q=70",
      description: "SM 676 Running Shoes For Men (Green, 8)",
    },
    {
      id: 4,
      title: "Red Shoes",
      price: 49.99,
      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/l08gsy80/shoe/n/a/n/9-assg1015-9-abros-l-grey-maroon-original-imagc2m9zbzmtybx.jpeg?q=70",
      description: "SM 676 Running Shoes For Men (Red, 10)",
    },
    {
      id: 5,
      title: "Yellow Shoes",
      price: 59.99,
      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/l08gsy80/shoe/n/a/n/9-assg1015-9-abros-l-grey-maroon-original-imagc2m9zbzmtybx.jpeg?q=70",
      description: "SM 676 Running Shoes For Men (Yellow, 11)",
    },
    {
      id: 6,
      title: "Yellow Shoes",
      price: 59.99,
      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/l08gsy80/shoe/n/a/n/9-assg1015-9-abros-l-grey-maroon-original-imagc2m9zbzmtybx.jpeg?q=70",
      description: "SM 676 Running Shoes For Men (Yellow, 11)",
    },
  ];

  const containerRef = useRef(null);  // Correct the naming

  // Scroll left and right handlers
  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" }); // Correct ref usage and behavior property
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });  // Correct ref usage and behavior property
  };

  return (

    <div className="relative w-full bg-gray-100 py-6">
      <h2 className=" text-2xl pl-5 font-bold">Men's Kurta</h2>
      {/* Scroll Left Button */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        onClick={scrollLeft}
      >
        &#8249;
      </button>

      {/* Horizontal Scrolling Container */}
      <div className="w-full overflow-x-auto" ref={containerRef}style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <div className="flex space-x-4 px-4 p-4">
          {Cloths.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-4 w-64 flex-none transform hover:scale-105 transition-transform duration-300"
            >
              <div className="h-48 flex items-center justify-center">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <p className="text-lg font-bold text-gray-900 mt-4">
                ${item.price}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Right Button */}
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        onClick={scrollRight}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Container;
