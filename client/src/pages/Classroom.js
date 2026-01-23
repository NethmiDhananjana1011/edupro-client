import React, { useState } from 'react';
import { FaPlayCircle, FaCheckCircle, FaArrowLeft, FaFileCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Classroom = () => {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  // ICT/Web Dev Playlist
  const lessons = [
    { id: 1, title: "1. Intro to HTML & Structure", duration: "10:05", videoId: "kUMe1FH4CHE" }, // Real HTML video ID
    { id: 2, title: "2. CSS Styling Basics", duration: "12:30", videoId: "1Rs2ND1ryYc" },
    { id: 3, title: "3. JavaScript Syntax Intro", duration: "15:45", videoId: "W6NZfCO5SIk" },
    { id: 4, title: "4. Building a React Component", duration: "18:20", videoId: "SqcY0GlETPk" }, 
  ];

  const currentLesson = lessons[currentLessonIndex];

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4 sticky top-0 z-50">
        <Link to="/dashboard" className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition"><FaArrowLeft /></Link>
        <div>
          <h1 className="text-lg font-bold text-gray-800">Web Development Bootcamp 2026</h1>
          <div className="w-64 bg-gray-200 rounded-full h-1.5 mt-1"><div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '25%' }}></div></div>
        </div>
      </div>
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-black rounded-3xl overflow-hidden shadow-2xl aspect-video relative">
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${currentLesson.videoId}?rel=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div><h2 className="text-2xl font-bold text-gray-800">{currentLesson.title}</h2><p className="text-gray-500 mt-1">Module {currentLessonIndex + 1} of {lessons.length}</p></div>
              <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl font-bold text-sm hover:bg-blue-100 transition flex items-center gap-2"><FaCheckCircle /> Mark Complete</button>
            </div>
            <hr className="border-gray-100 my-4"/>
            <h3 className="font-bold text-gray-800 mb-2">Description</h3>
            <p className="text-gray-500 text-sm leading-relaxed">In this module, we dive deep into the core technologies of the web. Ensure you have VS Code installed!</p>
          </div>
        </div>
        <div className="space-y-4">
           <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[500px]">
              <div className="p-5 border-b border-gray-100 bg-gray-50"><h3 className="font-bold text-gray-800">Course Modules</h3><p className="text-xs text-gray-500">{lessons.length} Videos</p></div>
              <div className="overflow-y-auto p-2 space-y-2 flex-1">
                {lessons.map((lesson, index) => (
                  <button key={lesson.id} onClick={() => setCurrentLessonIndex(index)} className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all text-left ${index === currentLessonIndex ? 'bg-blue-600 text-white shadow-lg' : 'hover:bg-gray-50 text-gray-600'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${index === currentLessonIndex ? 'bg-white text-blue-600' : 'bg-gray-100 text-gray-400'}`}>{index === currentLessonIndex ? <FaPlayCircle /> : index + 1}</div>
                      <div className="flex-1"><div className={`text-sm font-bold ${index === currentLessonIndex ? 'text-white' : 'text-gray-800'}`}>{lesson.title}</div></div>
                  </button>
                ))}
              </div>
           </div>
           <div className="bg-blue-50 p-5 rounded-3xl border border-blue-100 flex items-center gap-4 cursor-pointer hover:bg-blue-100 transition">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white"><FaFileCode /></div>
              <div><h4 className="font-bold text-blue-900 text-sm">Starter_Code.zip</h4><p className="text-xs text-blue-400">Download project files</p></div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Classroom;