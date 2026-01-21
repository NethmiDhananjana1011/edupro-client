import React from 'react';
import { FaPlay, FaSearch, FaFilter } from 'react-icons/fa';

const Recording = () => {
  const recordings = [
    { id: 1, title: "Newtonian Mechanics - Class 1", date: "10 Oct, 2026", duration: "45m", subject: "Physics", color: "bg-orange-100 text-orange-600" },
    { id: 2, title: "Organic Chemistry - Intro", date: "12 Oct, 2026", duration: "50m", subject: "Chemistry", color: "bg-blue-100 text-blue-600" },
    { id: 3, title: "Calculus - Limits", date: "14 Oct, 2026", duration: "1h 10m", subject: "Math", color: "bg-purple-100 text-purple-600" },
    { id: 4, title: "English Grammar - Part 1", date: "15 Oct, 2026", duration: "40m", subject: "English", color: "bg-pink-100 text-pink-600" },
    { id: 5, title: "Biology - Cell Structure", date: "16 Oct, 2026", duration: "55m", subject: "Biology", color: "bg-emerald-100 text-emerald-600" },
    { id: 6, title: "Newtonian Mechanics - Class 2", date: "18 Oct, 2026", duration: "48m", subject: "Physics", color: "bg-orange-100 text-orange-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      
      {/* HEADER & SEARCH */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Class Recordings 📹</h1>
          <p className="text-gray-500 text-sm mt-1">Watch past lessons anytime.</p>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <div className="bg-white flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100 shadow-sm w-full md:w-64">
            <FaSearch className="text-gray-400" />
            <input type="text" placeholder="Search class..." className="bg-transparent outline-none text-sm w-full" />
          </div>
          <button className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm text-gray-500 hover:bg-gray-50">
            <FaFilter />
          </button>
        </div>
      </div>

      {/* VIDEO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recordings.map((rec) => (
          <div key={rec.id} className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition group cursor-pointer">
            
            {/* THUMBNAIL AREA */}
            <div className="relative bg-gray-900 rounded-2xl h-40 flex items-center justify-center mb-4 overflow-hidden">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white pl-1 group-hover:scale-110 transition">
                <FaPlay />
              </div>
              <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded-md">
                {rec.duration}
              </span>
            </div>

            {/* INFO AREA */}
            <div className="flex justify-between items-start">
              <div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide ${rec.color}`}>
                  {rec.subject}
                </span>
                <h3 className="font-bold text-gray-800 mt-2 text-lg leading-tight">{rec.title}</h3>
                <p className="text-gray-400 text-xs mt-1">{rec.date}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Recording;