import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 1. Fetch Courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/courses', {
           headers: { 'auth-token': token }
        });
        setCourses(res.data);
        setLoading(false);
      } catch (err) {
        console.log("Error loading courses");
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  // 2. Handle Enrollment
  const handleEnroll = async (courseId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`http://localhost:5000/api/courses/${courseId}/enroll`, {}, {
        headers: { 'auth-token': token }
      });
      
      alert("🎉 Enrolled Successfully!");
      navigate('/'); // Redirect to Dashboard to see it
    } catch (err) {
      alert(err.response?.data?.error || "Enrollment failed");
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map(course => (
          <div key={course._id} className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="h-40 bg-gray-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
              <img src={course.thumbnail} alt={course.title} className="h-24 w-24 object-contain" />
            </div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
              {course.subject}
            </span>
            <h3 className="font-bold text-lg text-gray-800 mt-2">{course.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{course.totalChapters} Lessons • {course.difficulty}</p>
            
            <button 
              onClick={() => handleEnroll(course._id)}
              className="w-full mt-4 bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition shadow-lg shadow-gray-200"
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;