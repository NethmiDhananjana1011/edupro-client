import React from 'react';
import axios from 'axios';
import { FaCheckCircle, FaPlay } from 'react-icons/fa';

const CourseList = ({ courses }) => {
  
  // Function to handle the click
  const handleProgress = async (courseId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/api/courses/${courseId}/progress`, {}, {
        headers: { 'auth-token': token }
      });
      // Reload page to see the new bar (Simple way)
      window.location.reload(); 
    } catch (err) {
      alert(err.response?.data?.error || "Error updating progress");
    }
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">My Learning</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((item) => (
          <div key={item._id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            
            {/* Header: Title & Subject */}
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg">
                {item.course.title.charAt(0)}
              </div>
              <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded">
                {item.course.subject}
              </span>
            </div>

            <h3 className="font-bold text-lg text-gray-800">{item.course.title}</h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">
              {item.completedChapters} / {item.totalChapters} Chapters Done
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
              <div 
                className={`h-2 rounded-full ${item.status === 'Completed' ? 'bg-green-500' : 'bg-blue-600'}`} 
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              {item.status === 'Completed' ? (
                 <button disabled className="flex-1 bg-green-100 text-green-700 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2">
                   <FaCheckCircle /> Completed
                 </button>
              ) : (
                <>
                  <button className="flex-1 bg-gray-50 text-gray-600 py-2 rounded-lg text-sm font-bold hover:bg-gray-100">
                    Open
                  </button>
                  <button 
                    onClick={() => handleProgress(item.course._id)}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-bold hover:bg-blue-700 active:scale-95 transition"
                  >
                    +1 Chapter
                  </button>
                </>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;