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

<div className="mt-6 bg-white dark:bg-gray-950 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
  <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">

    <div>
      <h2 className="text-lg font-semibold">Bookings</h2>
  </div>
<div>

<div class="flex justify-center items-center">
  <div class="relative">
    <div class="flex items-center">
      <input type="search" id="default-search" class="block p-2 w-full px-5 py-3 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search ..."  />
      <button type="submit" class="text-white absolute right-2 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm p-2 px-3 dark:bg-blue-600  ">Search</button>
    </div>
  </div>
</div>


    </div>
  </div>
  <div className="overflow-x-auto">
    <table className="w-full table-auto" style={{ minWidth: "1250px" }}>
      <thead className="bg-gray-100 dark:bg-gray-800">
        <tr>
          <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Client ID</th>
          <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Price</th>
          <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Booking Type</th>
          <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Booking Date</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
        <tr>
          <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-50">#12345</td>
          <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-50">$99.99</td>
          <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-50">Hotel</td>
          <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-50">2023-05-01</td>
        </tr>
        <tr>
          <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-50">#12346</td>
          <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-50">$199.99</td>
          <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-50">Flight</td>
          <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-50">2023-05-15</td>
        </tr>
        <tr>
          <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-50">#12347</td>
          <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-50">$49.99</td>
          <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-50">Car Rental</td>
          <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-50">2023-06-01</td>
        </tr>
        <tr>
          <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-50">#12348</td>
          <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-50">$299.99</td>
          <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-50">Package</td>
          <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-50">2023-06-15</td>
        </tr>
      </tbody>
    </table>
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