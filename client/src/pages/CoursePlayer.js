import React, { useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'; 
import axios from 'axios';
import { FaArrowLeft, FaPlayCircle, FaCheck } from 'react-icons/fa';

const CoursePlayer = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const location = useLocation(); // <--- Tool to catch the data passed from the button
  const [loading, setLoading] = useState(false);

  // 1. Get the Course Title (passed from the Dashboard)
  const courseTitle = location.state?.title || "Course Lesson";

  // 2. Define Real Videos based on the Title
  const getVideoId = (title) => {
    if (title.includes("React")) return "Ke90Tje7VS0"; // React for Beginners
    if (title.includes("Physics")) return "bHIhgxav9LY"; // Physics (The Map of Physics)
    if (title.includes("Marketing")) return "F608h45zCXk"; // Digital Marketing
    return "dQw4w9WgXcQ"; // Default (Rick Roll) if unknown
  };

  const videoId = getVideoId(courseTitle);

  const handleComplete = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      
      await axios.put('http://localhost:5000/api/progress/update', 
        { courseId: id }, 
        { headers: { 'auth-token': token } }
      );

      navigate('/dashboard');

    } catch (err) {
      console.error("Error updating progress:", err);
      alert("Something went wrong updating your progress.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      
      {/* Top Bar */}
      <div className="p-4 bg-gray-800 border-b border-gray-700 flex items-center justify-between">
        <div className="flex items-center gap-4">
            <Link to="/dashboard" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">
            <FaArrowLeft />
            </Link>
            <div>
              <h1 className="text-lg font-bold">{courseTitle}</h1>
              <p className="text-xs text-gray-400">Chapter 1</p>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4 bg-black">
        <div className="w-full max-w-4xl aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 relative">
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${videoId}`} 
            title="Video Player"
            frameBorder="0" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Footer / Controls */}
      <div className="p-6 bg-gray-800 border-t border-gray-700 flex justify-between items-center">
        <div>
            <h2 className="text-xl font-bold mb-1 flex items-center gap-2">
                <FaPlayCircle className="text-blue-400"/> 
                Lesson Details
            </h2>
            <p className="text-gray-400 text-sm">Course ID: {id}</p>
        </div>

        <button 
            onClick={handleComplete}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition transform active:scale-95 shadow-lg shadow-green-900/50"
        >
            {loading ? "Saving..." : <><FaCheck /> Complete Lesson</>}
        </button>
      </div>

    </div>
  );
};

export default CoursePlayer;