import React from 'react';
import Link from 'next/link';
import ChatInput from './ChatInput';

const Chat = () => {
  return (
    <div className='bg-gray-700 flex-1 flex flex-col justify-between'>
      <div className='text-sm text-gray-400 overflow-y-auto  scrollbar scrollbar-thumb-gray-900 scrollbar-thin scrollbar-track-gray-100'>
        <div className='flex mx-6 my-3 py-4 border-t border-gray-600'>
          <div className='flex-none'>
            <Link href='/user'>
              <a className=''>
                <img
                  className='w-10 h-10 rounded-full object-cover'
                  src='https://lh3.googleusercontent.com/a-/AOh14GijH6xIjeGU2J7erxOkKKj3jc5GDRopVJsic9fR=s96-c'
                  alt='chat user avatar'
                />
              </a>
            </Link>
          </div>

          <div className='ml-5'>
            <div>
              <Link href='/'>
                <a className='text-white hover:underline'>Johny</a>
              </Link>
              <span className='text-xs text-gray-600 ml-1'>07/19/2019</span>
            </div>
            <div>
              <div>yeah haha</div>
              <div>what now</div>
              <div>anaza comment</div>
            </div>
          </div>
        </div>

        <div className='flex mx-6 my-3 py-4 border-t border-gray-600'>
          <div className='flex-none'>
            <Link href='/user'>
              <a className=''>
                <img
                  className='w-10 h-10 rounded-full object-cover'
                  src='https://lh3.googleusercontent.com/a-/AOh14GijH6xIjeGU2J7erxOkKKj3jc5GDRopVJsic9fR=s96-c'
                  alt='chat user avatar'
                />
              </a>
            </Link>
          </div>

          <div className='ml-5'>
            <div>
              <Link href='/'>
                <a className='text-white hover:underline'>Johny</a>
              </Link>
              <span className='text-xs text-gray-600 ml-1'>07/19/2019</span>
            </div>
            <div>
              <div>yeah haha</div>
              <div>what now</div>
              <div>anaza comment</div>
            </div>
          </div>
        </div>

        <div className='flex mx-6 my-3 py-4 border-t border-gray-600'>
          <div className='flex-none'>
            <Link href='/user'>
              <a className=''>
                <img
                  className='w-10 h-10 rounded-full object-cover'
                  src='https://lh3.googleusercontent.com/a-/AOh14GijH6xIjeGU2J7erxOkKKj3jc5GDRopVJsic9fR=s96-c'
                  alt='chat user avatar'
                />
              </a>
            </Link>
          </div>

          <div className='ml-5'>
            <div>
              <Link href='/'>
                <a className='text-white hover:underline'>Johny</a>
              </Link>
              <span className='text-xs text-gray-600 ml-1'>07/19/2019</span>
            </div>
            <div>
              <div>yeah haha</div>
              <div>what now</div>
              <div>anaza comment</div>
            </div>
          </div>
        </div>

        <div className='flex mx-6 my-3 py-4 border-t border-gray-600'>
          <div className='flex-none'>
            <Link href='/user'>
              <a className=''>
                <img
                  className='w-10 h-10 rounded-full object-cover'
                  src='https://lh3.googleusercontent.com/a-/AOh14GijH6xIjeGU2J7erxOkKKj3jc5GDRopVJsic9fR=s96-c'
                  alt='chat user avatar'
                />
              </a>
            </Link>
          </div>

          <div className='ml-5'>
            <div>
              <Link href='/'>
                <a className='text-white hover:underline'>Johny</a>
              </Link>
              <span className='text-xs text-gray-600 ml-1'>07/19/2019</span>
            </div>
            <div>
              <div>yeah haha</div>
              <div>what now</div>
              <div>anaza comment</div>
            </div>
          </div>
        </div>
      </div>
      <ChatInput />
    </div>
  );
};

export default Chat;
