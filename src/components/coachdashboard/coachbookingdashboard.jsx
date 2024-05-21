import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

export default function Component() {

    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    const handleClose = () => {  
        localStorage.removeItem('token');
        navigate('/login');
    };

    const fetchBookings = async (query = "") => {
      const token = localStorage.getItem('token');
      const coachId = token ? JSON.parse(atob(token.split('.')[1])).id : null;

      const response = await fetch(`http://localhost:3111/api/bookingscoach/${coachId}?search=${query}`);
      const data = await response.json();
      if (data.success) {
          setBookings(data.bookings);
      }
  };

  useEffect(() => {
      fetchBookings();
  }, []);

    return (
        <>
            <br /><br /><br />
            <div className="bg-white min-h-screen text-black flex flex-col">
                <div className="flex">
                    <div className="w-64 p-6 space-y-6">
                        <div className="flex items-center space-x-2">
                            <span className="font-bold cursor-pointer">Coach Dashboard</span>
                        </div>
                        <div className="space-y-4 flex-grow">
                            <nav className="space-y-1">
                                <a className="flex text-xl items-center space-x-2 text-black hover:bg-black hover:text-white p-2 rounded-md" href="dashboard">
                                    <LayoutGridIcon className="h-4 w-4" />
                                    <span>Dashboard</span>
                                </a>
                                <a className="flex text-xl items-center space-x-2 text-black hover:bg-black hover:text-white p-2 rounded-md" href="bookings">
                                    <BarChartIcon className="h-4 w-4" />
                                    <span>Bookings</span>
                                </a>
                                <a className="flex text-xl items-center space-x-2 text-black hover:bg-black hover:text-white p-2 rounded-md" href="chats">
                                    <MessageCircleIcon className="h-4 w-4" />
                                    <span>Chats</span>
                                </a>
                                <a className="flex text-xl items-center space-x-2 text-black hover:bg-black hover:text-white p-2 rounded-md" href="Settings">
                                    <SettingsIcon className="h-4 w-4" />
                                    <span>Settings</span>
                                </a>
                                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                                <button type="button" className="flex ml-6 items-center justify-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" onClick={handleClose}>
                                    <IoIosLogOut className="h-5 w-5 mr-2" /><span>LOG OUT</span>
                                </button>
                            </nav>
                        </div> 
                    </div>
                    <div className="mt-6 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 ">
                            <div>
                                <h2 className="text-lg font-semibold">Bookings</h2>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="relative">
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full table-auto" style={{ minWidth: "1250px" }}>
                                <thead className="bg-gray-100 ">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Client Name</th>
                                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Price</th>
                                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Booking Type</th>
                                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Booking Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 ">
                                    {bookings.map(booking => (
                                        <tr key={booking._id}>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 ">{booking.username}</td>
                                            <td className="px-6 py-4 text-sm text-gray-900 ">{booking.price} MAD</td>
                                            <td className="px-6 py-4 text-sm text-gray-900 ">{booking.sessionType}</td>
                                            <td className="px-6 py-4 text-sm text-gray-900 ">{new Date(booking.date).toLocaleDateString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

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
    );
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
    );
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