import React from 'react';
import ProductData from './ProductData';


export default function AllProduct() {
  
  return (
    <div className="relative w-full bg-gray-100 py-6">
      <div className="w-full overflow-x-auto min-h-[880px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
          {ProductData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-4 transform hover:scale-105 transition-transform duration-300"
              onClick={() => handleProductClick(item.id)}
            >
              <div className="h-60 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full object-cover rounded-md"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <div className="logo-container">
                <img src={item.logo} alt="" className="h-20 ml-20" />
                <div className="offer-container mt-4">
                  <h3 className="font-semibold text-4xl ml-16 opacity-70">{item.offer}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
