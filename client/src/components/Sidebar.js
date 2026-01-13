// src/components/Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBook, FaCalendarAlt, FaVideo, FaFolderOpen, FaCog, FaQuestionCircle } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: <FaHome />, path: '/' },
    { name: 'My Course', icon: <FaBook />, path: '/courses' },
    { name: 'Routine', icon: <FaCalendarAlt />, path: '/routine' },
    { name: 'Exam', icon: <FaFolderOpen />, path: '/exam' }, // Using folder icon for exam based on image
    { name: 'Settings', icon: <FaCog />, path: '/settings' },
  ];

  return (
    <div className="w-64 h-screen bg-sidebar text-white flex flex-col p-4 fixed left-0 top-0">
      {/* Logo Section */}
      <div className="flex items-center gap-2 mb-10 px-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-xl">
          E
        </div>
        <span className="text-2xl font-bold tracking-wide">EduPro</span>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-colors ${
                isActive 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto pt-6 border-t border-gray-700">
        <Link to="/help" className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-white">
          <FaQuestionCircle />
          <span>Help Center</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;