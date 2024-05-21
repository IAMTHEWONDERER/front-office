import React from 'react';
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

export default function Component() {

  const navigate = useNavigate();

  const handleClose = () => {
    // Delete token from local storage
    localStorage.removeItem('token');
    // Redirect to sign-in page
    navigate('/login');
  };

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
              <a className="flex  text-xl items-center space-x-2 text-black hover:bg-black hover:text-white p-2 rounded-md" href="Settings">
                  <SettingsIcon className="h-4 w-4" />
                  <span>Settings</span>
              </a>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              
              <button type="button" className="flex ml-1 items-center justify-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-10 py-2.5 me-1 mb-2 " onClick={handleClose}><IoIosLogOut className="h-5 w-5 mr-2" /><span>LOG OUT</span></button>            
</nav>
        </div> 
      </div>
      <div className="flex h-screen w-full">
      <div className="border-r bg-gray-100 mb-20 w-[300px] p-4 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold mb-6">Clients</h2>
        </div>
        <div className="flex-1 overflow-auto">
          <div className="space-y-2">
            <button
              className="w-full justify-start gap-3 text-left "
              variant="ghost"
            >
              <div className="flex-1 mb-6">
                <p className="font-medium">John Doe</p>
              </div>
              
            </button>
            <button
              className="w-full justify-start gap-3 text-left "
              variant="ghost"
            >
              <div className="flex-1 mt-1">
                <p className="font-medium">Jane Smith</p>
                
              </div>
              
            </button>
            <button
              className="w-full justify-start gap-3 text-left "
              variant="ghost"
            >
              <div className="flex-1 mt-6">
                <p className="font-medium">Bob Johnson</p>
                
              </div>
              
            </button>
            <button
              className="w-full justify-start gap-3 text-left "
              variant="ghost"
            >
              <div className="flex-1 mt-6">
                <p className="font-medium">Sarah Lee</p>
                
              </div> 
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="border-b bg-gray-100 dark:bg-gray-800 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3 mb-3 mt-3">
            <div>
              <p className="font-bold text-lg">John Doe</p>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-4 space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-[70%]">
              <p>Hey, how's it going?</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">10:30 AM</p>
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end">
            <div className="bg-primary rounded-lg p-3 text-gray-50 max-w-[70%]">
              <p>I'm doing great, thanks for asking!</p>
              <p className="text-xs text-gray-200 mt-1">10:31 AM</p>
            </div>

          </div>
        </div>
        <div className="border-t mb-20 bg-gray-100 p-5 flex items-center gap-3">
          <input className="flex-1 p-2 mr-6" placeholder="Type your message..." />
          <button>
            <SendIcon className=" mr-6 h-5 w-5 scale-150 hover:text-green-600" />
            <span className="sr-only">Send message</span>
          </button>
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
  
  
  function SendIcon(props) {
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
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </svg>
    )
  }
  
  
  function VideoIcon(props) {
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
        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
        <rect x="2" y="6" width="14" height="12" rx="2" />
      </svg>
    )
  }