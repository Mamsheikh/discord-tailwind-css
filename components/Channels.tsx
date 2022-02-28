import React, { useState } from 'react';

import { useSession } from 'next-auth/react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { FaMicrophone } from 'react-icons/fa';
import { AiOutlineSearch, AiFillGift, AiOutlineGif } from 'react-icons/ai';
import { IoMdHelpCircle, IoMdNotifications } from 'react-icons/io';
import { MdOutlineNotifications, MdAlternateEmail } from 'react-icons/md';
import { RiGroupFill } from 'react-icons/ri';
import {
  BsFillPinAngleFill,
  BsHeadphones,
  BsFillGearFill,
  BsFillPlusCircleFill,
  BsFillEmojiSmileFill,
} from 'react-icons/bs';
import Link from 'next/link';

const Channels = () => {
  const [accordion, setAccordion] = useState(true);
  // const { data: session, status } = useSession();
  return (
    <div className='w-56 bg-gray-800 flex-none flex flex-col justify-between'>
      <div className='text-sm overflow-y-auto scrollbar scrollbar-thumb-gray-900 scrollbar-thin scrollbar-track-gray-100'>
        <ul className='px-2 py-3'>
          <li className='text-gray-300 px-2 hover:text-gray-200 hover:bg-gray-900'>
            <Link href='/'>
              <a className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>Welcome</span>
              </a>
            </Link>
          </li>
          <li className='text-gray-200 px-2 hover:text-gray-200 hover:bg-gray-900'>
            <Link href='/'>
              <a className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>faq</span>
              </a>
            </Link>
          </li>
        </ul>
        <button className='ml-2 flex items-center text-gray-500 hover:text-gray-200 mb-3'>
          <span className=''>
            {accordion ? <FiChevronRight /> : <FiChevronDown />}
          </span>
          <h3
            onClick={() => setAccordion(!accordion)}
            className='uppercase tracking-wide font-semibold text-xs ml-1'
          >
            Tailwind css
          </h3>
        </button>
        <ul className={`${accordion ? 'hidden' : ''} px-2 py-3`}>
          <li className='text-gray-200 px-2 hover:text-gray-200 hover:bg-gray-900'>
            <Link href='/'>
              <a className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>general</span>
              </a>
            </Link>
          </li>
          <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
            <Link href='/'>
              <a className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>core-dev</span>
              </a>
            </Link>
          </li>
          <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
            <Link href='/'>
              <a className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>course</span>
              </a>
            </Link>
          </li>
          <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
            <Link href='/'>
              <a className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>plugins</span>
              </a>
            </Link>
          </li>
          <li className='text-gray-200 px-2 hover:text-gray-200 hover:bg-gray-900'>
            <Link href='/'>
              <a className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>docs</span>
              </a>
            </Link>
          </li>
          <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
            <Link href='/'>
              <a className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>showcase</span>
              </a>
            </Link>
          </li>
          <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
            <Link href='/'>
              <a className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>help</span>
              </a>
            </Link>
          </li>
        </ul>
        <button className='ml-2 flex items-center text-gray-500 hover:text-gray-200'>
          <FiChevronDown />
          <h3
            onClick={() => setAccordion(!accordion)}
            className='uppercase tracking-wide font-semibold text-xs ml-1'
          >
            community
          </h3>
        </button>
        <ul className={`${accordion ? 'hidden' : ''} px-2 py-3`}>
          <li className='text-gray-200 px-2 hover:text-gray-200 hover:bg-gray-900'>
            <Link href='/'>
              <a className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>feedback</span>
              </a>
            </Link>
          </li>
          <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
            <Link href='/'>
              <a className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>jobs</span>
              </a>
            </Link>
          </li>
        </ul>
        <button className='ml-2 flex items-center text-gray-500 hover:text-gray-200'>
          <FiChevronDown />
          <h3 className='uppercase tracking-wide font-semibold text-xs ml-1'>
            off-topic
          </h3>
        </button>
        <ul className='px-2 py-3'>
          <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
            <Link href='/'>
              <a className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>design</span>
              </a>
            </Link>
          </li>
          <li className='text-gray-200 px-2 hover:text-gray-200 hover:bg-gray-900'>
            <Link href='/'>
              <a className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>development</span>
              </a>
            </Link>
          </li>
          <li className='text-gray-200 px-2 hover:text-gray-200 hover:bg-gray-900'>
            <Link href='/'>
              <a className='flex items-center'>
                <span className='text-xl'>#</span>
                <span className='ml-2'>random</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className='bg-gray-900 p-2 flex items-center justify-between'>
        <div className='flex'>
          <Link href='/user'>
            <a className=''>
              <img
                className='w-8 h-8 rounded-full'
                src='https://lh3.googleusercontent.com/a/AATXAJwmuHYQfsGUjfjgUy8ZJsajaL15cDti2b6tmZ2a=s96-c'
                alt='avatar'
              />
            </a>
          </Link>
          <div className='text-xs ml-2 flex flex-col'>
            <span className='text-white leading-relaxed'>Munir</span>
            <span className='text-gray-500 text-xs'>#5734</span>
          </div>
        </div>
        <div className='flex items-center text-gray-500'>
          <Link href='/'>
            <a className=''>
              <FaMicrophone />
            </a>
          </Link>
          <Link href='/'>
            <a className='ml-3'>
              <BsHeadphones />
            </a>
          </Link>
          <Link href='/'>
            <a className='ml-3'>
              <BsFillGearFill />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Channels;
