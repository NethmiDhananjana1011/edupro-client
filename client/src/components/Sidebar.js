import React from 'react';
import { 
  FaHome, 
  FaBook, 
  FaCalendarAlt, 
  FaFolder, 
  FaCog, 
  FaSignOutAlt,
  FaQuestionCircle 
} from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // --- LOGOUT FUNCTION ---
  const handleLogout = () => {
    // 1. Remove the token from storage
    localStorage.removeItem('token');
    
    // 2. Redirect to Login Page
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path 
    ? "bg-blue-600 text-white shadow-md shadow-blue-200" 
    : "text-gray-500 hover:bg-blue-50 hover:text-blue-600";

  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-100 flex flex-col justify-between p-6 z-50">
      
      {/* 1. Logo Section */}
      <div>
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">
            E
          </div>
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">EduPro</h1>
        </div>

        {/* 2. Menu Links */}
        <nav className="flex flex-col gap-2">
          <Link to="/" className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${isActive('/')}`}>
            <FaHome className="text-lg" />
            <span>Dashboard</span>
          </Link>

          <Link to="/courses" className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${isActive('/courses')}`}>
            <FaBook className="text-lg" />
            <span>My Course</span>
          </Link>

          <div className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${isActive('/routine')}`}>
            <FaCalendarAlt className="text-lg" />
            <span>Routine</span>
          </div>

          <div className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${isActive('/exam')}`}>
            <FaFolder className="text-lg" />
            <span>Exam</span>
          </div>

          <div className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${isActive('/settings')}`}>
            <FaCog className="text-lg" />
            <span>Settings</span>
          </div>
        </nav>
      </div>

      {/* 3. Bottom Section (Logout) */}
      <div className="space-y-4">
        <div className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-gray-600 cursor-pointer transition">
          <FaQuestionCircle />
          <span className="font-medium text-sm">Help Center</span>
        </div>
        
        <hr className="border-gray-100" />

        {/* LOGOUT BUTTON */}
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-4 px-4 py-3 rounded-xl font-medium text-red-500 hover:bg-red-50 transition-all duration-200"
        >
          <FaSignOutAlt className="text-lg" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;