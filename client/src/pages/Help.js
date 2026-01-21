import React from 'react';
import { FaQuestionCircle, FaEnvelope, FaPhone } from 'react-icons/fa';

const Help = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Help & Support 💡</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* FAQ SECTION */}
        <div className="lg:col-span-2 space-y-4">
           <h2 className="text-lg font-bold text-gray-700">Frequently Asked Questions</h2>
           
           <details className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 cursor-pointer group">
              <summary className="font-bold text-gray-800 flex justify-between items-center list-none">
                 How do I reset my password?
                 <span className="text-emerald-500 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                 You can reset your password by going to the Settings page and entering a new password in the Security section.
              </p>
           </details>

           <details className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 cursor-pointer group">
              <summary className="font-bold text-gray-800 flex justify-between items-center list-none">
                 Where can I find recorded classes?
                 <span className="text-emerald-500 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                 Navigate to the "Recording" tab in the sidebar. All past live classes are uploaded there within 24 hours.
              </p>
           </details>

           <details className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 cursor-pointer group">
              <summary className="font-bold text-gray-800 flex justify-between items-center list-none">
                 How do I contact my tutor?
                 <span className="text-emerald-500 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                 You can post questions in the "Resources" section or join the live class 5 minutes early to chat with the tutor.
              </p>
           </details>
        </div>

        {/* CONTACT CARD */}
        <div className="space-y-6">
            <div className="bg-emerald-500 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                    <FaQuestionCircle className="text-4xl mb-4 opacity-80" />
                    <h3 className="text-2xl font-bold mb-2">Need more help?</h3>
                    <p className="opacity-90 text-sm mb-6">Our support team is available 24/7 to assist you.</p>
                    <button className="bg-white text-emerald-600 px-6 py-2 rounded-xl font-bold text-sm hover:bg-emerald-50 transition">
                        Chat with Us
                    </button>
                </div>
                {/* Decorative Circle */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
                        <FaEnvelope />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 font-bold uppercase">Email us</p>
                        <p className="font-bold text-gray-800">support@edupro.com</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-500">
                        <FaPhone />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 font-bold uppercase">Call us</p>
                        <p className="font-bold text-gray-800">+1 800 123 456</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Help;