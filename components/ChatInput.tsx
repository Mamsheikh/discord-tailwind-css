import React from 'react';
import { AiOutlineSearch, AiFillGift, AiOutlineGif } from 'react-icons/ai';
const ChatInput = () => {
  return (
    <div className='bg-gray-750 h-12 flex items-center mx-3 border mb-4 shadow-lg border-gray-600 py-3'>
      <button className='px-2 py-2 h-10 bg-gray-700 rounded-l text-gray-500 hover:text-white border-r border-gray-600'>
        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
          <g data-name='Layer 2'>
            <g data-name='plus-circle'>
              <rect width='24' height='24' opacity='0'></rect>
              <path d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3 11h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2z'></path>
            </g>
          </g>
        </svg>
      </button>
      <div className='flex-1 '>
        <input
          type='text'
          placeholder='message #general'
          className='w-full outline-none focus:ring-0 text-sm border-0 h-10 px-2 py-2 bg-gray-700 text-gray-200 focus:outline-none'
        />
      </div>
      <div className='px-2 py-2 bg-gray-700 rounded-r flex items-center h-10'>
        <button className='h-10 bg-gray-700 rounded-l text-gray-500 hover:text-white'>
          <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 512 512'>
            <path d='M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm448-288h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40zm-72 320h160c17.7 0 32-14.3 32-32V320H288v160z'></path>
          </svg>
        </button>
        <button className='h-10 bg-gray-700 rounded-l text-gray-500 hover:text-white ml-3'>
          <AiOutlineGif />
        </button>
        <button className='h-10 bg-gray-700 rounded-l text-gray-500 hover:text-white ml-3'>
          <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 496 512'>
            <path d='M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z'></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
