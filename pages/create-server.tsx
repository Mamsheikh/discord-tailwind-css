import React from 'react';
import Channels from '../components/Channels';
import Chat from '../components/Chat';
import Modal from '../components/Modal';
import SideBar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import UserSidebar from '../components/UserSidebar';

const CreateServer = () => {
  return (
    <div className='flex'>
      <SideBar />
      <div className='flex flex-1 flex-col min-h-screen h-screen'>
        {/* //Header */}
        <Topbar />

        {/* //Sidebar */}
        <div className=' flex-1 flex overflow-y-hidden'>
          <div className='w-56 bg-gray-800 flex-none flex flex-col justify-between'>
            <h3>Create Server</h3>
            <Modal />
          </div>
          {/* Chat div */}
          <div className=' flex-1 flex justify-between'>
            {/* Chat */}
            <Chat />
            {/* User sidebar */}
            <UserSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateServer;
