import React from 'react';
import Bagdata from './Bagdata';

const Bagp = () => {
  return (
    <div className='w-full h-auto bg-gray-100 p-4 overflow-x-auto'>
      <div className='flex space-x-7 ho'>
        {Bagdata.map((item, index) => (
          <div key={index} className='bg-white flex flex-col items-center justify-between p-4 rounded-lg shadow-lg w-44'>
            
            
            <div className='w-36 h-36 rounded-full overflow-hidden flex justify-center items-center mb-4'>
              <img src={item.img} alt={item.type} className='w-full h-full object-cover' />
            </div>

            
            <div className='text-center h-12 flex items-center justify-center'>
              <p className='text-lg font-semibold text-black'>{item.type}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bagp;
