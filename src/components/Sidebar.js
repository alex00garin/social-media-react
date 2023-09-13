import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../components/firebase'; // Adjust the import path as needed
import { ReactComponent as ProfileIcon } from '../icons/profile.svg'
import { ReactComponent as FriendsleIcon } from '../icons/friends.svg'
import { ReactComponent as MessageIcon } from '../icons/message.svg'
import { ReactComponent as CalendarIcon } from '../icons/calendar.svg'
import { ReactComponent as SignOutIcon } from '../icons/signout.svg'



function Sidebar() {

  const [expanded, setExpanded] = useState(false);

  const sidebarItems = [
    { id: 1, icon: <ProfileIcon />, name: 'Profile' },
    { id: 2, icon: <FriendsleIcon />, name: 'Friends' },
    { id: 3, icon: <MessageIcon />, name: 'Messages' },
    { id: 4, icon: <CalendarIcon />, name: 'Calendar' },
  ];

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  function onLogout() {
    auth.signOut();
    <Link to="/welcome"></Link>
  }
    
  return (
  <>
      {/* Sidebar Menu */}
    <div className={`md:fixed md:top-0 md:left-0 z-40 md:w-${expanded ? '56' : '14'} font-rajdhani font-normal text-lg h-screen transition-all duration-500 ease-in-out -translate-x-full md:translate-x-0 overflow-y-auto bg-neutral-800 dark:bg-neutral-200 md:${expanded ? 'translate-x-0' : '-translate-x-full'}`}>
      <button
        className={`flex justify-center mt-3 mb-10 mx-auto w-full py-5 transition duration-500 hover:bg-neutral-100 text-neutral-100 hover:text-neutral-800`}
        onClick={toggleSidebar}
        aria-label={expanded ? 'Collapse Sidebar' : 'Expand Sidebar'}>
        {expanded ? (
          <svg
            className="w-5 h-5 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
            />
          </svg>
        )}
      </button>
      <div className="lg:flex lg:flex-col font-rajdhani font-normal text-lg">
        {sidebarItems.map((item) => (
          <div key={item.id} className="flex justify-center p-3 mx-auto w-full transition duration-500 ease-in-out text-neutral-100 hover:bg-neutral-100 hover:text-neutral-800 cursor-pointer">          
            <span title={item.name}></span>
            {expanded ? (
              <>
                <span className="icon p-3 mr-3">{item.icon}</span>
                {expanded && (
                  
                  <span className="name w-20 font-rajdhani font-normal text-lg py-2 self-center">
                    {item.name}
                  </span>
                )}            
              </>
            ) : (
              <span className="icon flex justify-center p-3 mx-auto w-full">{item.icon}</span>
              
            )}
          </div>
        ))}

        <div key={sidebarItems.length + 1} className="absolute flex bottom-3 justify-between self-center p-3 w-full transition duration-500 ease-in-out text-neutral-100 hover:bg-neutral-100 hover:text-neutral-800 cursor-pointer">
         <Link to='/welcome' className="icon p-3 mr-3"><SignOutIcon /></Link>
          {expanded && (
            <Link to='/welcome' className="name  font-rajdhani font-normal text-lg w-20 py-2 my-auto ">
              Log Out
            </Link>
          )}
        </div>
      </div>
    </div>

      {/* Bottom Menu */}
    <div className="fixed bottom-0 md:hidden left-0 z-50 w-full h-16 bg-neutral-800 font-rajdhani font-normal">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto ">
          <button type="button" className="hover:bg-neutral-100 text-neutral-100 transition duration-500 ease-in-out hover:text-neutral-800 inline-flex flex-col items-center justify-center px-5">
            <ProfileIcon />
            <span className="text-sm mt-1">Profile</span>
          </button>
          <button type="button" className="hover:bg-neutral-100 text-neutral-100 transition duration-500 ease-in-out hover:text-neutral-800 inline-flex flex-col items-center justify-center px-5">
            <FriendsleIcon />
            <span className="text-sm mt-1">Friends</span>
          </button>
          <button type="button" className="hover:bg-neutral-100 text-neutral-100 transition duration-500 ease-in-out hover:text-neutral-800 inline-flex flex-col items-center justify-center px-5">
            <MessageIcon />
            <span className="text-sm mt-1">Messages</span>
          </button>
          <Link onClick={onLogout} type="button" className="hover:bg-neutral-100 text-neutral-100 transition duration-500 ease-in-out hover:text-neutral-800 inline-flex flex-col items-center justify-center px-5">
            <SignOutIcon />
            <span className="text-sm mt-1">Sign Out</span>
          </Link>
      </div>
    </div>
  </>
  );
}

export default Sidebar;
