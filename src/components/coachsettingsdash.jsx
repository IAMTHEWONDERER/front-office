import React from 'react';
import { IoIosLogOut } from "react-icons/io";

export default function Component() {
  return (
    <><br /><br /><br />
    <div className="bg-white min-h-screen text-black flex flex-col">
      <div className="flex">
        <div className="w-64 p-6 space-y-6">
          <div className="flex items-center space-x-2">
            <span className="font-bold cursor-pointer">Coach Dashboard</span>
          </div>
          <div className="space-y-4 flex-grow">
            <div className="flex items-center justify-between">
            </div>
            <nav className="space-y-1">
              <a className="flex text-xl items-center space-x-2 text-black hover:bg-black hover:text-white p-2 rounded-md" href="dashboard">
                <LayoutGridIcon className="h-4 w-4" />
                <span>Dashboard</span>
              </a>
              <a className="flex  text-xl items-center space-x-2 text-black hover:bg-black hover:text-white p-2 rounded-md" href="bookings">
                <BarChartIcon className="h-4 w-4" />
                <span >Bookings</span>
              </a>
              <a className="flex text-xl items-center space-x-2 text-black hover:bg-black hover:text-white p-2 rounded-md" href="chats">
                <MessageCircleIcon className="h-4 w-4" />
                <span>Chats</span>
              </a>
              <a className="flex  text-xl items-center space-x-2 text-black hover:bg-black hover:text-white p-2 rounded-md" href="clients">
                <UsersIcon className="h-4 w-4" />
                <span>Clients</span>
              </a>
              <a className="flex  text-xl items-center space-x-2 text-black hover:bg-black hover:text-white p-2 rounded-md" href="Settings">
                  <SettingsIcon className="h-4 w-4" />
                  <span>Settings</span>
              </a>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              
              <button type="button" className="flex ml-6 items-center justify-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"><IoIosLogOut className="h-5 w-5 mr-2" /><span>LOG OUT</span></button>            
</nav>
        </div> 
      </div>
      <div className="w-full max-w-3xl mx-auto py-12 md:py-16">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        <div className="space-y-4">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="font-medium">Name</label>
                <input type="text" placeholder="John Doe" id="name" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="font-medium">Email</label>
                <input type="email" placeholder="john@example.com" id="email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
              </div>
            </div>
            <div>
              <label htmlFor="bio" className="font-medium">Bio</label>
              <textarea id="bio" rows={3} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit." className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"></textarea>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label htmlFor="password" className="font-medium">Password</label>
              <input type="password" id="password" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <button id="delete-account" className="bg-white-500 border-2 border-red-600 hover:bg-red-600 hover:text-white text-black font-bold py-2 px-4 rounded-full mr-6">Delete Account</button>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-white-500 border-2 border-black hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-full mr-6">Save Changes</button>
        </div>
      </div>
    </div>
      </div>
      </div>
      </>
)}

function BarChartIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" x2="12" y1="20" y2="10" />
        <line x1="18" x2="18" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="16" />
      </svg>
    )
  }
  
  function LayoutGridIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </svg>
    )
  }
  
  
  function MessageCircleIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
    )
  }
  
  
  function SettingsIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
  
  function UsersIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }