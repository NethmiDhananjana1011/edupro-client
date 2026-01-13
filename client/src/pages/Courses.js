// client/src/pages/Courses.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPlay, FaClock, FaSignal } from 'react-icons/fa';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/dashboard/all-courses');
        setCourses(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching courses:", err);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div className="p-8 text-gray-500">Loading your courses...</div>;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">My Learning</h1>
        <div className="text-sm text-gray-500">
          You are enrolled in <span className="font-bold text-gray-800">{courses.length}</span> courses
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((enrollment) => (
          <div key={enrollment._id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100">
            
            {/* Course Image Header */}
            <div className="h-40 bg-gray-200 relative">
               <img 
                 src={`https://ui-avatars.com/api/?name=${enrollment.course.title}&background=random&size=200`} 
                 alt={enrollment.course.title}
                 className="w-full h-full object-cover"
               />
               <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold text-gray-700 shadow-sm">
                 {enrollment.course.subject}
               </div>
            </div>

            {/* Content Body */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{enrollment.course.title}</h3>
              
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <FaClock className="text-gray-400" />
                  <span>{enrollment.course.totalChapters * 2}h Total</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaSignal className="text-gray-400" />
                  <span>{enrollment.course.difficulty || "Intermediate"}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="text-primary">{enrollment.progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${enrollment.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full py-3 rounded-xl bg-gray-50 text-primary font-bold text-sm hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2">
                <FaPlay size={12} />
                {enrollment.progress > 0 ? 'Continue Learning' : 'Start Course'}
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;