import React from 'react'

const Newsletter = () => {
  return (
    <>
    <div className=" p-4 md:p-8 font-koulen">
      <div className="grid justify-center items-center md:flex-row">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-4xl">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 text-center">Get the latest news straight to your inbox.</p>
        </div>
        <br/>
        <div className="flex space-x-4 items-center justify-center gap-5 mt-5">
        <button className=" bg-red-600 hover:bg-red-900 text-white px-4 py-2 rounded transition duration-300 ease-in-out">
  Book NOW
</button>          
<button className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded transition duration-300 ease-in-out">REGISTER</button>
        </div>
      </div>
      <hr className="my-8 border-gray-300" />
      <div className="text-center">
        <h2 className="text-2xl mb-4">Join Our Newsletter</h2>
        <div className="flex items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 px-20 py-2 focus:outline-none rounded-l-full text-start pl-10"
          />
          <button className="bg-red-600 text-white px-4 py-2.5 rounded-r-full">Subscribe</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Newsletter