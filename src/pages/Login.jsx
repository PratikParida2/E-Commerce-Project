import React, { useState } from 'react'
const Login = () => {
  const [currentState,setCurrentState]=useState('SignUp');
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">{currentState}</h2>
        <form>
          {currentState==='SignUp'?        <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your Name"
              required
            />
          </div>:''}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 cursor-pointer"
          >
            {currentState}
          </button>
        </form>
        {currentState==='Login'?        <div className='w-full flex justify-center text-center text-sm mt-[8px]'>
          <p className='cursor-pointer'>Forget Password</p>
        </div>:''}
        {currentState==='SignUp'?<p className="text-center text-gray-600 mt-4">
          Have an account? <a href="#" onClick={()=>setCurrentState('Login')} className="text-blue-500 hover:underline ">Login</a>
        </p>:<p className="text-center text-gray-600 mt-4">
          Dont't Have an account? <a href="#" onClick={()=>setCurrentState('SignUp')} className="text-blue-500 hover:underline ">SignUp</a>
        </p>}
    
      </div>
     
    </div>
  )
}

export default Login
