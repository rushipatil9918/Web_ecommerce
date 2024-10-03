import React from 'react';

const SareeContainer = () => {
  const Sarees = [
    {
      id: 1,
      title: 'Saree',
      price: 19.99,
      imageUrl: 'https://rukminim1.flixcart.com/image/612/612/xif0q/sari/v/p/3/free-prathna-om-vastra-fab-unstitched-original-imaghmwuprfjubfn.jpeg?q=70',
      description: 'A stylish red t-shirt made from 100% cotton.',
    },
    {
        id: 1,
        title: 'Saree',
        price: 19.99,
        imageUrl: 'https://rukminim1.flixcart.com/image/612/612/xif0q/sari/v/p/3/free-prathna-om-vastra-fab-unstitched-original-imaghmwuprfjubfn.jpeg?q=70',
        description: 'A stylish red t-shirt made from 100% cotton.',
      },
      {
        id: 1,
        title: 'Saree',
        price: 19.99,
        imageUrl: 'https://rukminim1.flixcart.com/image/612/612/xif0q/sari/v/p/3/free-prathna-om-vastra-fab-unstitched-original-imaghmwuprfjubfn.jpeg?q=70',
        description: 'A stylish red t-shirt made from 100% cotton.',
      },
      {
        id: 1,
        title: 'Saree',
        price: 19.99,
        imageUrl: 'https://rukminim1.flixcart.com/image/612/612/xif0q/sari/v/p/3/free-prathna-om-vastra-fab-unstitched-original-imaghmwuprfjubfn.jpeg?q=70',
        description: 'A stylish red t-shirt made from 100% cotton.',
      },
      {
        id: 1,
        title: 'Saree',
        price: 19.99,
        imageUrl: 'https://rukminim1.flixcart.com/image/612/612/xif0q/sari/v/p/3/free-prathna-om-vastra-fab-unstitched-original-imaghmwuprfjubfn.jpeg?q=70',
        description: 'A stylish red t-shirt made from 100% cotton.',
      },
      {
        id: 1,
        title: 'Saree',
        price: 19.99,
        imageUrl: 'https://rukminim1.flixcart.com/image/612/612/xif0q/sari/v/p/3/free-prathna-om-vastra-fab-unstitched-original-imaghmwuprfjubfn.jpeg?q=70',
        description: 'A stylish red t-shirt made from 100% cotton.',
      }
  ];

  return (
    <div className="w-full bg-gray-100 py-6">
      <div className="w-full overflow-x-auto">
        <div className="flex space-x-4 px-4">
          {Sarees.map(item => (
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
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <p className="text-lg font-bold text-gray-900 mt-4">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SareeContainer;
