import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaGoogle, FaFacebook, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      // await axios.post('http://localhost:5000/api/auth/register', formData);
      alert("Registration Successful! Please Login.");
      navigate('/login');
    } catch (err) {
      alert("Registration Failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4 font-sans">
      
      <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row h-[700px]">
        
        {/* --- LEFT SIDE: DESIGN WITH LOGO --- */}
        <div className="hidden md:flex w-1/2 bg-blue-600 relative overflow-hidden items-center justify-center">
          
          {/* Decorative Floating Circles */}
          <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-blue-500 rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-400 rounded-full opacity-30"></div>
          <div className="absolute top-1/2 right-20 w-12 h-12 bg-white rounded-full opacity-20"></div>
          
          {/* The Big Circle Overlay */}
          <div className="absolute w-[600px] h-[600px] bg-blue-500 rounded-full left-[-300px] bottom-[-100px] opacity-20"></div>

          <div className="relative z-10 text-center text-white p-8">
             
             {/* --- YOUR NEW LOGO IS HERE --- */}
             <div className="bg-white p-4 rounded-3xl shadow-lg inline-block mb-6">
                <img src="/logo.png" alt="EduPro Logo" className="w-48 mx-auto" />
             </div>
            
            <h3 className="text-2xl font-bold mb-3">Join the Community</h3>
            <p className="text-blue-100 text-sm leading-relaxed max-w-xs mx-auto">
              Start your learning journey today. Unlock access to thousands of courses and quizzes.
            </p>
          </div>
        </div>

        {/* --- RIGHT SIDE: FORM --- */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
          <div className="text-center md:text-left mb-8">
            <h2 className="text-3xl font-extrabold text-blue-900">Create Account</h2>
            <p className="text-gray-400 text-sm mt-2">It's free and only takes a minute.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative group">
              <FaUser className="absolute top-4 left-4 text-gray-300 group-focus-within:text-blue-500 transition" />
              <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required className="w-full p-4 pl-12 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-400 outline-none text-gray-600 font-medium placeholder-gray-400 transition" />
            </div>
            <div className="relative group">
              <FaEnvelope className="absolute top-4 left-4 text-gray-300 group-focus-within:text-blue-500 transition" />
              <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required className="w-full p-4 pl-12 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-400 outline-none text-gray-600 font-medium placeholder-gray-400 transition" />
            </div>
            <div className="relative group">
              <FaLock className="absolute top-4 left-4 text-gray-300 group-focus-within:text-blue-500 transition" />
              <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="w-full p-4 pl-12 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-400 outline-none text-gray-600 font-medium placeholder-gray-400 transition" />
            </div>
             <div className="relative group">
              <FaLock className="absolute top-4 left-4 text-gray-300 group-focus-within:text-blue-500 transition" />
              <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required className="w-full p-4 pl-12 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-blue-400 outline-none text-gray-600 font-medium placeholder-gray-400 transition" />
            </div>
            <button className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-800 transition transform hover:-translate-y-1 mt-4">REGISTER</button>
          </form>

          <div className="mt-8">
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-4 text-gray-400 text-xs font-bold uppercase">Or sign up with</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>
            <div className="flex gap-4 mt-4">
              <button className="flex-1 bg-white border border-gray-100 py-3 rounded-xl shadow-sm text-gray-600 font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition"><FaFacebook className="text-blue-600 text-lg" /> Facebook</button>
              <button className="flex-1 bg-white border border-gray-100 py-3 rounded-xl shadow-sm text-gray-600 font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition"><FaGoogle className="text-red-500 text-lg" /> Google</button>
            </div>
          </div>
          <p className="text-center mt-8 text-gray-500 text-sm">Already have an account? <Link to="/login" className="text-blue-600 font-bold hover:underline">Login here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;