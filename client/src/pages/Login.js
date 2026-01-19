import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // In a real app: const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      // localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert("Login Failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4 font-sans">
      
      <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row h-[600px]">
        
        {/* LEFT SIDE: FORM */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-white">
          <div className="mb-6 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-blue-900">Login Now</h2>
            <p className="text-gray-400 text-sm mt-2">Please enter your details to continue.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="email" name="email" placeholder="Email or Username" onChange={handleChange}
              className="w-full p-4 bg-gray-50 rounded-xl border-none shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-gray-600 placeholder-gray-400 transition"
            />
            <input 
              type="password" name="password" placeholder="Password" onChange={handleChange}
              className="w-full p-4 bg-gray-50 rounded-xl border-none shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-gray-600 placeholder-gray-400 transition"
            />
            
            <button className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-800 transition transform hover:-translate-y-1">
              LOGIN
            </button>
          </form>

          <div className="mt-8">
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-4 text-gray-400 text-xs font-bold uppercase">Or login with</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>
            
            <div className="flex gap-4 mt-4">
              <button className="flex-1 bg-white border border-gray-100 py-3 rounded-xl shadow-sm text-gray-600 font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                <FaFacebook className="text-blue-600 text-lg" /> Facebook
              </button>
              <button className="flex-1 bg-white border border-gray-100 py-3 rounded-xl shadow-sm text-gray-600 font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                <FaGoogle className="text-red-500 text-lg" /> Google
              </button>
            </div>
          </div>
          
          <p className="text-center mt-8 text-gray-500 text-sm">
            Not a member? <Link to="/register" className="text-blue-600 font-bold hover:underline">Register</Link>
          </p>
        </div>

        {/* RIGHT SIDE: DESIGN WITH LOGO */}
        <div className="hidden md:flex w-1/2 bg-blue-600 relative overflow-hidden items-center justify-center">
          {/* Decorative Circles */}
          <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-blue-500 rounded-full opacity-50"></div>
          <div className="absolute bottom-[-20px] left-[-20px] w-20 h-20 bg-blue-400 rounded-full opacity-30"></div>
          <div className="absolute top-1/2 left-10 w-10 h-10 bg-white rounded-full opacity-20"></div>

          {/* The Big Circle Overlay */}
          <div className="absolute w-[500px] h-[500px] bg-blue-500 rounded-full right-[-250px] opacity-20"></div>

          <div className="relative z-10 text-center text-white p-8">
            
            {/* --- YOUR NEW LOGO IS HERE --- */}
            {/* I added 'bg-white' and 'rounded-xl' to make the logo pop against the blue background */}
            <div className="bg-white p-4 rounded-3xl shadow-lg inline-block mb-6">
                <img src="/logo.png" alt="EduPro Logo" className="w-48 mx-auto" />
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Welcome Back!</h3>
            <p className="text-blue-100">Your gateway to world-class learning.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;