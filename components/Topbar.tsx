import React from 'react';
import { AiOutlineSearch, AiFillGift, AiOutlineGif } from 'react-icons/ai';
import { IoMdHelpCircle, IoMdNotifications } from 'react-icons/io';
import { MdOutlineNotifications, MdAlternateEmail } from 'react-icons/md';
import { RiGroupFill } from 'react-icons/ri';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import {
  BsFillPinAngleFill,
  BsHeadphones,
  BsFillGearFill,
  BsFillPlusCircleFill,
  BsFillEmojiSmileFill,
} from 'react-icons/bs';
import Link from 'next/link';
const Topbar = () => {
  return (
    <div>
      <div className='flex text-white h-12 border-b border-gray-900'>
        <div className='w-56 px-4 py-2 shadow-lg flex-none bg-gray-800 flex items-center justify-between'>
          <span className='font-semibold'>Vue Js</span>
          <button>
            <FiChevronDown />
          </button>
        </div>
        <div className='px-4 bg-gray-700 flex-1 flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <span className='text-gray-600 text-2xl font-bold'>#</span>
            <span className='text-white text-small '>verification</span>
            <span className='border-l pl-3 ml-3 text-xs border-gray-600 text-gray-400'>
              general discussion of Tailwind CSS
            </span>
          </div>
          <div className='flex items-center'>
            <Link href='/'>
              <a className='ml-4 hover:text-gray-400 hover:scale-125 ease-in-out'>
                <IoMdNotifications />
              </a>
            </Link>
            <Link href='/'>
              <a className='ml-4 hover:text-gray-400 hover:scale-125 ease-in-out'>
                <BsFillPinAngleFill />
              </a>
            </Link>
            <Link href='/'>
              <a className='ml-4 hover:text-gray-400 hover:scale-125 ease-in-out'>
                <RiGroupFill />
              </a>
            </Link>
            <form action='' className='relative ml-4'>
              <input
                className='rounded bg-gray-900 text-gray-200 text-xs px-2 py-1'
                type='text'
                placeholder='Search'
              />
              <span
                style={{ top: '6px' }}
                className='absolute right-0 top-0 mr-1 hover:text-gray-400 hover:scale-125 ease-in-out'
              >
                <AiOutlineSearch />
              </span>
            </form>
            <Link href='/'>
              <a className='ml-4 hover:text-gray-400 hover:scale-125 ease-in-out'>
                <MdAlternateEmail />
              </a>
            </Link>
            <Link href='/'>
              <a className='ml-4 hover:text-gray-400 hover:scale-125 ease-in-out'>
                <IoMdHelpCircle />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
