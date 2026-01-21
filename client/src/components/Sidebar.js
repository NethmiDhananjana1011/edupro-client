import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  FaHome, FaBook, FaCalendarAlt, FaVideo, FaFolderOpen, 
  FaCog, FaQuestionCircle, FaSignOutAlt, FaExclamationTriangle 
} from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogoutModal, setShowLogoutModal] = useState(false); // State for Popup

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const mainMenus = [
    { name: "Home", icon: <FaHome />, path: "/dashboard" },
    { name: "My courses", icon: <FaBook />, path: "/my-courses" },
    
    // 👇 Make sure these paths are all different!
    { name: "Routine", icon: <FaCalendarAlt />, path: "/routine" }, 
    { name: "Recording", icon: <FaVideo />, path: "/recording" },   
    { name: "Resources", icon: <FaFolderOpen />, path: "/resources" }, 
    
    { name: "Exam / Quiz", icon: <FaFolderOpen />, path: "/exam" },
  ];

  const otherMenus = [
    { name: "Settings", icon: <FaCog />, path: "/routine" },
    { name: "Help", icon: <FaQuestionCircle />, path: "/routine" },
  ];

  return (
    <>
      <div className="w-72 bg-white h-screen border-r border-gray-100 flex flex-col p-6 sticky top-0 font-sans shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-40">
        
        {/* --- LOGO --- */}
        <div className="flex items-center gap-3 mb-12 px-2">
          <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-200">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-2xl font-extrabold text-gray-800 tracking-tight">Edupro</span>
        </div>

        {/* --- SCROLLABLE MENU --- */}
        <div className="flex-1 overflow-y-auto no-scrollbar space-y-8">
          <div>
              <div className="text-[10px] font-bold text-gray-400 mb-4 px-3 uppercase tracking-widest">Main Menu</div>
              <nav className="space-y-1">
                  {mainMenus.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                      <Link 
                      key={item.name} 
                      to={item.path}
                      className={`relative flex items-center gap-4 p-3.5 rounded-2xl transition-all duration-300 group ${
                          isActive 
                          ? "bg-emerald-500 text-white shadow-lg shadow-emerald-200" 
                          : "text-gray-500 hover:bg-gray-50 hover:text-emerald-600"
                      }`}
                      >
                      <div className={`text-lg transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`}>{item.icon}</div>
                      <span className="text-sm font-bold tracking-wide">{item.name}</span>
                      {isActive && <div className="absolute right-4 w-1.5 h-1.5 bg-white rounded-full opacity-50"></div>}
                      </Link>
                  );
                  })}
              </nav>
          </div>

          <div>
              <div className="text-[10px] font-bold text-gray-400 mb-4 px-3 uppercase tracking-widest">Other</div>
              <nav className="space-y-1">
                  {otherMenus.map((item) => (
                  <Link key={item.name} to={item.path} className="flex items-center gap-4 p-3.5 rounded-2xl text-gray-500 hover:bg-gray-50 hover:text-emerald-600 transition-all duration-200 group">
                      <div className="text-lg group-hover:rotate-90 transition-transform duration-300">{item.icon}</div>
                      <span className="text-sm font-bold tracking-wide">{item.name}</span>
                  </Link>
                  ))}
              </nav>
          </div>
        </div>

        {/* --- LOGOUT BUTTON (Triggers Modal) --- */}
        <div className="pt-6 border-t border-gray-50 mt-auto">
          <button 
              onClick={() => setShowLogoutModal(true)} 
              className="w-full flex items-center gap-3 p-4 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all duration-200 group"
          >
              <FaSignOutAlt className="group-hover:-translate-x-1 transition-transform"/>
              <span className="font-bold text-sm">Logout</span>
          </button>
        </div>
      </div>

      {/* --- LOGOUT CONFIRMATION MODAL --- */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl transform transition-all scale-100">
            <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
              <FaExclamationTriangle />
            </div>
            
            <h3 className="text-xl font-bold text-center text-gray-800 mb-2">Log out?</h3>
            <p className="text-gray-500 text-center text-sm mb-8">
              Are you sure you want to log out? You will need to enter your details again to access your courses.
            </p>

            <div className="flex gap-4">
              <button 
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button 
                onClick={handleLogout}
                className="flex-1 py-3 px-4 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 shadow-lg shadow-red-200 transition"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;