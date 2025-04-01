import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'

const Contact = () => {
  return (
    // <div>
    //   <div className='text-center text-2xl pt-10 border-t'>
    //     <Title text1={'CONTACT '} text2={' US'}/>
    //   </div>
    //   <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
    //     <img  className='w-10% h-[-10%] md:max-[480px] ' src={assets.contact_img} alt="" />
    //     <div className='flex flex-col justify-center items-start gap-6'>
    //       <p className='font-semibold text-gray-600 text-xl'>Our Store</p>
    //       <p></p>
    //       <p></p>
    //       <p></p>
    //       <p></p>
    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100 min-h-screen">
      <div className="md:w-1/2 flex flex-col items-center mb-6 md:mb-0 text-center">
        <img
          src={assets.contact_img} 
          alt="Contact Us"
          className="w-full max-w-sm rounded-lg shadow-lg mb-4"
        />
       
        <p className="text-gray-600 text-lg mb-1"><strong>Address:</strong> Patia, Bhubaneswar, 751010</p>
        <p className="text-gray-600 text-lg mb-1"><strong>Email:</strong>shopnow@gmail.com</p>
        <p className="text-gray-600 text-lg mb-1"><strong>Phone:</strong> +123 456 7890</p>
      </div>
      <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
