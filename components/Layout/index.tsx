import React, { useState } from 'react';
import SideBar from '../Sidebar';
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

import avatar from '../../assets/person-1.jpg';
import Topbar from '../Topbar';
import Channels from '../Channels';
import Chat from '../Chat';
import UserSidebar from '../UserSidebar';
import Modal from '../Modal';

const Layout = () => {
  const [accordion, setAccordion] = useState(true);
  const { data: session, status } = useSession();
  return (
    <div className='flex'>
      <SideBar />
      <div className='flex flex-1 flex-col min-h-screen h-screen'>
        {/* //Header */}
        <Topbar />

        {/* //Sidebar */}
        <div className=' flex-1 flex overflow-y-hidden'>
          <Channels />
          {/* Chat div */}
          <div className=' flex-1 flex justify-between'>
            {/* Chat */}
            <Chat />
            {/* User sidebar */}
            <UserSidebar />
          </div>
        </div>
      </div>
      {/* <Modal /> */}
    </div>
  );
};

export default Layout;
