import React, { useState } from 'react';
import { FaPlay, FaSearch, FaFilter, FaTimes, FaLaptopCode, FaClock, FaUser } from 'react-icons/fa';

const Recording = () => {
  // State for Modal Player, Search, and Category
  const [activeVideo, setActiveVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // --- REAL ICT VIDEO DATA ---
  const allRecordings = [
    { 
      id: 1, 
      title: "HTML & CSS Full Course - Beginner to Pro", 
      tutor: "SuperSimpleDev", 
      date: "Oct 10, 2026", 
      duration: "6h 30m", 
      category: "Web Dev", 
      videoId: "G3e-cpL7ofc", 
      color: "bg-orange-100 text-orange-600" 
    },
    { 
      id: 2, 
      title: "Python for Beginners - Full Course", 
      tutor: "Programming with Mosh", 
      date: "Oct 12, 2026", 
      duration: "1h 00m", 
      category: "Python", 
      videoId: "_uQrJ0TkZlc", 
      color: "bg-blue-100 text-blue-600" 
    },
    { 
      id: 3, 
      title: "React JS - The Complete Guide (2026)", 
      tutor: "Academind", 
      date: "Oct 14, 2026", 
      duration: "45m", 
      category: "Web Dev", 
      videoId: "acJHkd6To5U", 
      color: "bg-cyan-100 text-cyan-600" 
    },
    { 
      id: 4, 
      title: "Introduction to Cyber Security", 
      tutor: "Simplilearn", 
      date: "Oct 15, 2026", 
      duration: "2h 15m", 
      category: "Security", 
      videoId: "inWWhr5tnEA", 
      color: "bg-red-100 text-red-600" 
    },
    { 
      id: 5, 
      title: "SQL Tutorial - Full Database Course", 
      tutor: "FreeCodeCamp", 
      date: "Oct 16, 2026", 
      duration: "4h 20m", 
      category: "Database", 
      videoId: "HXV3zeQKqGY", 
      color: "bg-purple-100 text-purple-600" 
    },
    { 
      id: 6, 
      title: "Linux Command Line Basics", 
      tutor: "NetworkChuck", 
      date: "Oct 18, 2026", 
      duration: "48m", 
      category: "DevOps", 
      videoId: "gd7BXuUQ91w", 
      color: "bg-gray-100 text-gray-700" 
    },
  ];

  // --- FILTER LOGIC ---
  const filteredVideos = allRecordings.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", "Web Dev", "Python", "Security", "Database", "DevOps"];

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans relative">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
             Recorded Sessions <span className="text-2xl">📹</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1">Access our library of {allRecordings.length}+ coding tutorials.</p>
        </div>
        
        {/* SEARCH BAR */}
        <div className="flex gap-3 w-full md:w-auto bg-white p-1 rounded-2xl shadow-sm border border-gray-100">
           <div className="flex items-center gap-3 px-4 py-2 w-full md:w-72">
             <FaSearch className="text-gray-400" />
             <input 
               type="text" 
               placeholder="Search topics..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="bg-transparent outline-none text-sm w-full font-medium text-gray-600 placeholder-gray-300" 
             />
           </div>
        </div>
      </div>

      {/* CATEGORY TABS (Scrollable) */}
      <div className="flex gap-3 mb-8 overflow-x-auto pb-2 no-scrollbar">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat 
                ? "bg-gray-900 text-white shadow-lg shadow-gray-200 transform scale-105" 
                : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* VIDEO GRID */}
      {filteredVideos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((rec) => (
            <div 
              key={rec.id} 
              onClick={() => setActiveVideo(rec)}
              className="bg-white p-4 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              
              {/* THUMBNAIL (Uses real YouTube thumbnail) */}
              <div className="relative rounded-2xl h-48 mb-4 overflow-hidden">
                <img 
                  src={`https://img.youtube.com/vi/${rec.videoId}/maxresdefault.jpg`} 
                  alt={rec.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white pl-1 border border-white/30 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-300 shadow-xl">
                      <FaPlay />
                   </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1">
                   <FaClock className="text-[10px]" /> {rec.duration}
                </div>
                
                {/* Category Badge */}
                <div className={`absolute top-3 left-3 text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wide shadow-sm ${rec.color}`}>
                  {rec.category}
                </div>
              </div>

              {/* VIDEO INFO */}
              <div className="px-2 pb-2">
                <h3 className="font-bold text-gray-800 text-lg leading-tight mb-2 line-clamp-2 group-hover:text-emerald-600 transition">
                  {rec.title}
                </h3>
                
                <div className="flex justify-between items-center text-xs text-gray-400 font-medium">
                   <div className="flex items-center gap-2">
                      <FaUser className="text-gray-300" />
                      <span>{rec.tutor}</span>
                   </div>
                   <span>{rec.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Empty State
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
           <FaSearch className="text-4xl mb-4 opacity-20" />
           <p>No videos found for "{searchTerm}"</p>
        </div>
      )}

      {/* --- VIDEO PLAYER MODAL (Popup) --- */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
           
           {/* Close Button */}
           <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition p-2 bg-white/10 rounded-full"
           >
              <FaTimes className="text-2xl" />
           </button>

           <div className="w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
              {/* YouTube Embed */}
              <div className="aspect-video">
                 <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                 ></iframe>
              </div>
              
              {/* Modal Details */}
              <div className="p-6 bg-gray-900 text-white flex justify-between items-center">
                 <div>
                    <h2 className="text-xl font-bold">{activeVideo.title}</h2>
                    <p className="text-gray-400 text-sm mt-1">Instructor: {activeVideo.tutor}</p>
                 </div>
                 <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-xl font-bold text-sm transition">
                    Download Resources
                 </button>
              </div>
           </div>
        </div>
      )}

    </div>
  );
};

export default Recording;