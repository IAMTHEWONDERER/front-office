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
              <a className="flex  text-xl items-center space-x-2 text-black hover:bg-black hover:text-white p-2 rounded-md" href="Settings">
                  <SettingsIcon className="h-4 w-4" />
                  <span>Settings</span>
              </a>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              
              <button type="button" className="flex ml-6 items-center justify-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"><IoIosLogOut className="h-5 w-5 mr-2" /><span>LOG OUT</span></button>            
</nav>
        </div> 
      </div>
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Hello David</h1>
          </div>
          <div className="grid grid-cols-3 mt-6 text-black">
            <div className="bg-white border-2 border-black p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div>
                    <div className="font-medium">Total Profits</div> 
                  </div>
                </div>
              </div>
              <div className="mt-4 ">
                <div className="text-2xl font-bold ml-6">$3490.00</div>
              </div>
            </div>
            <div className="bg-white p-4 border-2 border-black rounded-lg ml-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div>
                    <div className="font-medium">Latest Customers</div>
                  </div>
                </div>              
              </div>
              <div className="mt-4 grid gap-2">
                      <div className="flex items-center justify-between">
                        <div>John Doe</div>
                        <div className="font-medium">$12,345.67</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>Jane Smith</div>
                        <div className="font-medium">$9,876.54</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>Bob Johnson</div>
                        <div className="font-medium">$7,890.12</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>Sarah Lee</div>
                        <div className="font-medium">$6,543.21</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>Tom Wilson</div>
                        <div className="font-medium">$5,432.10</div>
                      </div>
                </div>
                
        </div>           
        </div>
        <div class="bg-white shadow-md rounded-lg overflow-hidden mt-6">
          <div class="bg-white border-b border-white-200 p-4 ">
            <h2 class="text-lg font-semibold text-black">Recent Sales Transactions</h2>
            <div className='flex flex-row-reverse'>
           <a href="bookings"><button class="bg-white-500 border-2 border-black hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-full mr-6">Show More</button></a>
            </div>
          </div>
          <div class="p-4">
            <table class="w-full text-black">
              <thead>
                <tr class="border-b border-white">
                  <th class="text-left py-2 px-4">Customer</th>
                  <th class="text-left py-2 px-4">Type of service</th>
                  <th class="text-left py-2 px-4">Price</th>
                  <th class="text-left py-2 px-4">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-white">
                  <td class="py-2 px-4">John Doe</td>
                  <td class="py-2 px-4">Online</td>
                  <td class="py-2 px-4">$49.99</td>
                  <td class="py-2 px-4">2023-05-01</td>
                </tr>
                <tr class="border-b border-white">
                  <td class="py-2 px-4">Jane Smith</td>
                  <td class="py-2 px-4">In-Person</td>
                  <td class="py-2 px-4">$49.99</td>
                  <td class="py-2 px-4">2023-05-01</td>
                </tr>
                <tr class="border-b border-white">
                  <td class="py-2 px-4">Bob Johnson</td>
                  <td class="py-2 px-4">Online</td>
                  <td class="py-2 px-4">$49.99</td>
                  <td class="py-2 px-4">2023-05-01</td>
                </tr>
                <tr class="border-b border-white">
                  <td class="py-2 px-4">Sarah Lee</td>
                  <td class="py-2 px-4">Online</td>
                  <td class="py-2 px-4">$49.99</td>
                  <td class="py-2 px-4">2023-05-01</td>
                </tr>
                <tr class="border-b border-white">
                  <td class="py-2 px-4">Tom Wilson</td>
                  <td class="py-2 px-4">Online</td>
                  <td class="py-2 px-4">$49.99</td>
                  <td class="py-2 px-4">2023-05-01</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
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