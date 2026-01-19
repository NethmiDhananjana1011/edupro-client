import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaBookOpen, FaCheckCircle, FaClock } from 'react-icons/fa';
import CourseList from '../components/CourseList';

const Dashboard = () => {
  const [data, setData] = useState({
    username: "",
    totalEnrolled: 0,
    completedCourses: 0,
    totalHours: 0 
  });
  
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = { 'auth-token': token };

        // 1. Fetch Stats
        const statsRes = await axios.get('http://localhost:5000/api/dashboard', { headers });
        setData(statsRes.data);

        // 2. Fetch My Courses
        const coursesRes = await axios.get('http://localhost:5000/api/dashboard/my-courses', { headers });
        
        // --- THE FIX: UNWRAP THE DATA ---
        // We extract the course details from the enrollment object
        const unwrappedCourses = coursesRes.data.map(enrollment => {
          if (!enrollment.course) return null; // Skip if broken
          return {
            ...enrollment.course,       // Get Title, Image, etc.
            _id: enrollment.course._id, // Ensure ID is correct
            progress: enrollment.progress, // Add user's progress
            totalChapters: enrollment.totalChapters,
            completedChapters: enrollment.completedChapters,
            status: enrollment.status      // Add status
          };
        }).filter(item => item !== null); // Remove any nulls

        setCourses(unwrappedCourses);

      } catch (err) {
        console.log("Error loading dashboard data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Hello, {data.username || "Student"}! 👋</h1>
        <p className="text-gray-500 mt-1">Here is your daily progress overview.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Total Enrolled */}
        <div className="bg-white p-6 rounded-2xl shadow-sm flex items-center gap-4">
          <div className="p-4 bg-blue-100 text-blue-600 rounded-xl text-2xl">
            <FaBookOpen />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Enrolled</p>
            <h3 className="text-3xl font-bold text-gray-800">{data.totalEnrolled}</h3>
          </div>
        </div>

        {/* Courses Completed */}
        <div className="bg-white p-6 rounded-2xl shadow-sm flex items-center gap-4">
          <div className="p-4 bg-green-100 text-green-600 rounded-xl text-2xl">
            <FaCheckCircle />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Courses Completed</p>
            <h3 className="text-3xl font-bold text-gray-800">{data.completedCourses}</h3>
          </div>
        </div>

        {/* Total Hours */}
        <div className="bg-white p-6 rounded-2xl shadow-sm flex items-center gap-4">
          <div className="p-4 bg-orange-100 text-orange-600 rounded-xl text-2xl">
            <FaClock />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Hours</p>
            <h3 className="text-3xl font-bold text-gray-800">{data.totalHours}h</h3>
          </div>
        </div>

      </div>

      {/* My Learning Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">My Learning</h2>
        {courses.length > 0 ? (
          <CourseList courses={courses} />
        ) : (
          <div className="p-10 bg-white rounded-2xl border border-dashed border-gray-300 text-center text-gray-400">
            You haven't enrolled in any courses yet. 
            <br />
            <span className="text-sm mt-2 block">Go to "My Course" to pick a class!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;