import React, { useState } from 'react';
import { FaPlayCircle, FaCheckCircle, FaArrowLeft, FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Classroom = () => {
  // State to track which video is playing (0 = first video)
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  // Mock Data: Physics Course Playlist
  const lessons = [
    { id: 1, title: "1. Introduction to Motion", duration: "10:05", videoId: "kKKM8Y-u7ds" }, 
    { id: 2, title: "2. Velocity and Speed", duration: "12:30", videoId: "DR9w4KOWJM4" },
    { id: 3, title: "3. Newton's First Law", duration: "15:45", videoId: "5pO2Kja_w_M" },
    { id: 4, title: "4. Gravity Explained", duration: "18:20", videoId: "7K2t1K1f" }, 
  ];

  const currentLesson = lessons[currentLessonIndex];

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      
      {/* --- TOP HEADER --- */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4 sticky top-0 z-50">
        <Link to="/dashboard" className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition">
          <FaArrowLeft />
        </Link>
        <div>
          <h1 className="text-lg font-bold text-gray-800">Physics 1: Newtonian Mechanics</h1>
          <div className="w-64 bg-gray-200 rounded-full h-1.5 mt-1">
             <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '25%' }}></div>
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* --- LEFT SIDE: VIDEO PLAYER --- */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* THE YOUTUBE PLAYER */}
          <div className="bg-black rounded-3xl overflow-hidden shadow-2xl aspect-video relative">
            <iframe 
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${currentLesson.videoId}?rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* LESSON DETAILS */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{currentLesson.title}</h2>
                <p className="text-gray-500 mt-1">Lesson {currentLessonIndex + 1} of {lessons.length}</p>
              </div>
              <button className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-xl font-bold text-sm hover:bg-emerald-100 transition flex items-center gap-2">
                <FaCheckCircle /> Mark Complete
              </button>
            </div>
            <hr className="border-gray-100 my-4"/>
            <h3 className="font-bold text-gray-800 mb-2">Description</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              In this lesson, we will explore the fundamental concepts of motion. 
              Take notes on velocity, speed, and acceleration!
            </p>
          </div>
        </div>

        {/* --- RIGHT SIDE: PLAYLIST --- */}
        <div className="space-y-4">
           <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[500px]">
              <div className="p-5 border-b border-gray-100 bg-gray-50">
                <h3 className="font-bold text-gray-800">Course Content</h3>
                <p className="text-xs text-gray-500">{lessons.length} Lessons</p>
              </div>

              <div className="overflow-y-auto p-2 space-y-2 flex-1">
                {lessons.map((lesson, index) => {
                  const isActive = index === currentLessonIndex;
                  return (
                    <button 
                      key={lesson.id}
                      onClick={() => setCurrentLessonIndex(index)}
                      className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all text-left ${
                        isActive 
                          ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200' 
                          : 'hover:bg-gray-50 text-gray-600'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                        isActive ? 'bg-white text-emerald-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {isActive ? <FaPlayCircle /> : index + 1}
                      </div>
                      
                      <div className="flex-1">
                        <div className={`text-sm font-bold ${isActive ? 'text-white' : 'text-gray-800'}`}>
                          {lesson.title}
                        </div>
                        <div className={`text-xs ${isActive ? 'text-emerald-100' : 'text-gray-400'}`}>
                          {lesson.duration}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
           </div>

           {/* DOWNLOAD BUTTON */}
           <div className="bg-blue-50 p-5 rounded-3xl border border-blue-100 flex items-center gap-4 cursor-pointer hover:bg-blue-100 transition">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white">
                <FaFileAlt />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 text-sm">Lecture Notes.pdf</h4>
                <p className="text-xs text-blue-400">Download material</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Classroom;