import { BsPlus, BsGearFill } from 'react-icons/bs';
import { FaDiscord, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';
import { useState } from 'react';
import Modal from './Modal';
import { modalState } from '../atoms/modalAtoms';
import { useRecoilState } from 'recoil';

const SideBar = () => {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  return (
    <div className=' h-screen w-20 flex-none flex flex-col min-h-screen overflow-y-auto dark:bg-white bg-gray-900 shadow-lg'>
      <SideBarIcon href='/' icon={<FaDiscord size='28' />} />

      <Divider />

      <SideBarIcon href='/tailwind' icon={<SiTailwindcss size='32' />} />

      <SideBarIcon href='/react' icon={<FaReact size='32' />} />
      <button onClick={() => setIsOpen(true)}>
        {/* <SideBarIcon href='/create-server' icon={<BsPlus size='32' />} /> */}
        <BsPlus className='sidebar-icon' size='32' />
      </button>
      <SideBarIcon href='/react' icon={<AiOutlineSearch size='20' />} />
      {/* <SideBarIcon icon={<FaPoo size='20' />} /> */}
      <Divider />
      <SideBarIcon href='/react' icon={<BsGearFill size='22' />} />
      {isOpen && <Modal />}
    </div>
  );
};

const SideBarIcon = ({ icon, href, text = 'tooltip 💡' }) => (
  <div className='sidebar-icon group'>
    <Link href={`${href}`}>{icon}</Link>
    {/* <span class='sidebar-tooltip group-hover:scale-100'>{text}</span> */}
  </div>
);

const Divider = () => <hr className='sidebar-hr' />;

export default SideBar;
