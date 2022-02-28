import { gql, useMutation } from '@apollo/client';
import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtoms';

const CREATE_SERVER = gql`
  mutation Mutation($name: String!) {
    createServer(name: $name) {
      id
      name
      image
    }
  }
`;

const Modal = () => {
  const [createServer, { error }] = useMutation(CREATE_SERVER);
  const handleSubmit = async () => {
    try {
      await createServer({ variables: { name } });
    } catch (error) {}
  };
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [name, setName] = useState('');
  return (
    <Dialog
      className='fixed inset-0 z-50 flex justify-center items-start'
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-70'></Dialog.Overlay>
      <div className='flex items-center w-full  flex-col justify-center px-4 py-10 max-w-md bg-white rounded-lg mx-4  max-h-[80vh] mt-[10vh] relative'>
        <div className='flex justify-between'>
          <h2 className='text-2xl font-bold text-gray-700'>
            Customize your server
          </h2>
          <div
            className='absolute cursor-pointer'
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-700 relative left-80 right-3 bottom-2 -mr-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>
        </div>
        <span className='text-gray-500 text-md text-center mt-3 leading-relaxed '>
          Give your new server a personality with a name and an icon. You can
          always change it later
        </span>
        <div className='input_field flex flex-col w-max mx-auto text-center'>
          <label>
            <input
              className='text-sm focus:outline-none focus:invalid:ring-blue-500 cursor-pointer w-36 hidden'
              type='file'
              accept='image/png, image/gif, image/jpeg'
            />
            <div className='flex mt-4 py-4  items-center text bg-green-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
              Upload image
            </div>
          </label>
        </div>
        <div className='w-full space-y-2'>
          <label
            htmlFor=''
            className='uppercase text-gray-600 leading-3 font-semibold'
          >
            Server Name
          </label>
          <input
            className='w-full rounded'
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter server name'
          />
        </div>
        <span className='text-xs text-gray-500 w-full mt-2'>
          By creating a server, You agree to Datcord's{' '}
          <span className='font-bold text-blue-500'>Community Guidelines.</span>
        </span>
        <div className='flex mt-2 items-center space-x-72 justify-between'>
          <button onClick={() => setIsOpen(!isOpen)}>Back</button>
          <button
            type='submit'
            className='bg-indigo-500 rounded px-3 py-1 text-white'
            onClick={() => createServer({ variables: { name } })}
          >
            Create
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
