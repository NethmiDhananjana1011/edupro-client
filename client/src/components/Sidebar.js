import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaBook, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { name: "My Course", icon: <FaBook />, path: "/dashboard" }, // Can point to catalog if you have one
    { name: "Exam", icon: <FaClipboardList />, path: "/exam" },   // <--- IMPORTANT: Link to /exam
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 flex flex-col p-6 sticky top-0">
      <div className="flex items-center gap-3 mb-10 text-blue-600">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">E</div>
        <span className="text-2xl font-bold">EduPro</span>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link 
            key={item.name} 
            to={item.path}
            className="flex items-center gap-3 p-3 text-gray-600 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition"
          >
            {item.icon}
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>

      <button onClick={handleLogout} className="flex items-center gap-3 p-3 text-red-500 hover:bg-red-50 rounded-xl transition mt-auto">
        <FaSignOutAlt />
        <span className="font-medium">Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;