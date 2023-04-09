import React from 'react'
import { BsHouseFill } from 'react-icons/bs';
import { BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';

import SidebarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
import SidebarTweetButton from './SidebarTweetButton';
import useCurrentUser from '@/hooks/useCurrentUser';
import { signOut } from 'next-auth/react';

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();

  const items = [
    {
      label: 'Home',
      href: '/',
      icon: BsHouseFill
    },
    {
      label: 'Notification',
      href: '/notification',
      icon: BsBellFill,
      auth: true
    },
    {
      label: 'Profile',
      href: '/profile',
      icon: FaUser,
      auth: true
    }
  ]
  
  
  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
      <div className='flex flex-col items-end'>
        <div className='space-y-2 lg:w-[230px]'>
          <SidebarLogo/>
          {items.map((items) => (
            <SidebarItem
              key={items.href}
              href={items.href}
              label={items.label}
              icon={items.icon}
              auth={items.auth}
              />
          ))}
          {currentUser && (
            <SidebarItem onClick={() => signOut()} icon={BiLogOut} label='Logout'/>  
          )}
          <SidebarTweetButton/>
        </div>
      </div>
    </div>
    )
    
}
export default Sidebar