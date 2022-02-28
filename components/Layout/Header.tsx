import React from 'react';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';

const Header = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  return (
    <header className='bg-[#295DE7] flex items-center justify-between py-4 px-6'>
      <a href='/'>
        <FaDiscord className='text-gray-400' size={64} />
      </a>
      <div className='hidden lg:flex  space-x-6 '>
        <a className='link'>Download</a>
        <a className='link'>Why Discord?</a>
        <a className='link'>Nitro</a>
        <a className='link'>Safety</a>
        <a className='link'>Support</a>
      </div>
      <div className='flex space-x-4'>
        <button
          className='bg-white p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium'
          onClick={() =>
            !session?.user ? signIn() : () => router.push('/channels')
          }
        >
          {!session?.user ? 'Login' : 'Open Discord'}
        </button>
        <AiOutlineMenu className='h-9 text-white cursor-pointer lg:hidden' />
      </div>
    </header>
  );
};

export default Header;
