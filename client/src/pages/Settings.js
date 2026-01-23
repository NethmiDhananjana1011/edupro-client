import React from 'react';
import { FaUser, FaLock, FaBell, FaSave } from 'react-icons/fa';

const Settings = () => {

  // 👇 This function runs when you click the button
  const handleSave = () => {
    // In a real app, this is where you would save to the database
    alert("✅ Success! Your changes have been saved.");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Account Settings ⚙️</h1>

      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* PROFILE CARD */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-6 text-gray-800 font-bold border-b pb-2">
             <FaUser className="text-emerald-500" /> Personal Information
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1 uppercase">Full Name</label>
              <input type="text" defaultValue="Anika Ahmed" className="w-full p-3 bg-gray-50 rounded-xl outline-none font-bold text-gray-700 focus:bg-emerald-50 transition" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1 uppercase">Email Address</label>
              <input type="email" defaultValue="student@test.com" className="w-full p-3 bg-gray-50 rounded-xl outline-none font-bold text-gray-700 focus:bg-emerald-50 transition" />
            </div>
             <div>
              <label className="block text-xs font-bold text-gray-400 mb-1 uppercase">Phone Number</label>
              <input type="text" defaultValue="+880 1712 345678" className="w-full p-3 bg-gray-50 rounded-xl outline-none font-bold text-gray-700 focus:bg-emerald-50 transition" />
            </div>
          </div>
        </div>

        {/* SECURITY CARD */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-6 text-gray-800 font-bold border-b pb-2">
             <FaLock className="text-orange-500" /> Security
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1 uppercase">Current Password</label>
              <input type="password" placeholder="••••••••" className="w-full p-3 bg-gray-50 rounded-xl outline-none focus:bg-orange-50 transition" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1 uppercase">New Password</label>
              <input type="password" placeholder="••••••••" className="w-full p-3 bg-gray-50 rounded-xl outline-none focus:bg-orange-50 transition" />
            </div>
          </div>
        </div>

        {/* NOTIFICATIONS */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between">
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <FaBell />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Email Notifications</h4>
                <p className="text-xs text-gray-400">Receive emails about new assignments.</p>
              </div>
           </div>
           
           <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
            </label>
        </div>

        {/* SAVE BUTTON (Now Working!) */}
        <div className="flex justify-end">
            <button 
                onClick={handleSave} 
                className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition flex items-center gap-2 shadow-lg hover:shadow-xl transform active:scale-95"
            >
                <FaSave /> Save Changes
            </button>
        </div>

      </div>
    </div>
  );
};

export default Settings;