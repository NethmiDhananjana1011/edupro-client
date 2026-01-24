import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { FaBookOpen, FaClock, FaCheckCircle, FaFire, FaPlay, FaCalendarAlt, FaSpinner, FaLaptopCode } from 'react-icons/fa';

const Dashboard = () => {
  const navigate = useNavigate();

  // State for Real Courses
  const [courses, setCourses] = useState([]);

  // Fetch Courses from Server when page loads
 useEffect(() => {
    const fetchCourses = async () => {
      try {
        // 👇 Get the token from storage
        const token = localStorage.getItem('token'); 
        
        const res = await fetch('http://localhost:5000/api/courses', {
          headers: {
            // 👇 Send the token to the server
            'Authorization': `Bearer ${token}` 
          }
        });

        if (res.ok) {
           const data = await res.json();
           setCourses(data);
        } else {
           console.error("Server Error:", res.status);
        }
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };
    fetchCourses();
  }, []);

  // --- DATA: ICT UPCOMING CLASSES ---
  const upcomingClasses = [
    { id: 1, title: "React JS: Hooks & Context", subject: "Web Dev", tutor: "Sarah Jenkins", date: "Today", time: "04:00 PM", status: "Live", timeLeft: "Live Now", img: "https://i.pravatar.cc/150?u=sarah", color: "blue" },
    { id: 2, title: "SQL Database Design", subject: "Database", tutor: "Michael Chen", date: "Tomorrow", time: "10:00 AM", status: "Upcoming", timeLeft: "18 hr left", img: "https://i.pravatar.cc/150?u=mike", color: "orange" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans text-gray-800">
      
      {/* HEADER */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Hello, Future Dev! 👨‍💻</h1>
          <p className="text-gray-500 text-sm mt-1">Ready to write some code today?</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-2 pr-4 rounded-full shadow-sm border border-gray-100">
          <img src="https://i.pravatar.cc/150?img=12" alt="Profile" className="w-10 h-10 rounded-full" />
          <span className="text-sm font-bold text-gray-700">Alex Coder</span>
        </div>
      </header>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col relative overflow-hidden">
          <h3 className="text-gray-700 font-bold mb-4">Coding Proficiency</h3>
          <div className="flex-1 flex items-center justify-center">
             <div className="relative w-44 h-44 rounded-full flex items-center justify-center"
                 style={{ background: `conic-gradient(#3B82F6 75%, #F3F4F6 0)` }}>
              <div className="bg-white w-36 h-36 rounded-full flex flex-col items-center justify-center z-10 shadow-inner">
                <span className="text-4xl font-extrabold text-gray-800">75%</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Advanced</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            <StatCard icon={<FaLaptopCode className="text-blue-500" />} label="Active Courses" value="3" />
            <StatCard icon={<FaCheckCircle className="text-emerald-500" />} label="Completed" value="12" />
            <StatCard icon={<FaClock className="text-purple-500" />} label="Coding Hours" value="340h" />
            <StatCard icon={<FaFire className="text-orange-500" />} label="GitHub Streak" value="15 Days" />
        </div>
      </div>

      {/* UPCOMING CLASSES */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Live Sessions</h2>
        <div className="grid grid-cols-1 gap-4">
          {upcomingClasses.map((cls) => (
            <div key={cls.id} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between hover:shadow-md transition gap-4">
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <img src={cls.img} alt={cls.tutor} className="w-14 h-14 rounded-2xl object-cover shadow-sm" />
                    <div>
                        <h4 className="font-bold text-lg text-gray-800">{cls.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide bg-blue-50 text-blue-600">{cls.subject}</span>
                          <span className="text-xs text-gray-400">by {cls.tutor}</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-6 text-sm font-medium text-gray-500 bg-gray-50 px-6 py-3 rounded-xl w-full md:w-auto justify-center">
                    <div className="flex items-center gap-2"><FaCalendarAlt className="text-gray-400"/> {cls.date}</div>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <div className="flex items-center gap-2"><FaClock className="text-gray-400"/> {cls.time}</div>
                </div>
                <div className="flex items-center gap-4 w-full md:w-auto justify-end">
                    <button 
                      onClick={() => navigate('/classroom')} 
                      className={`px-6 py-2.5 rounded-xl text-sm font-bold text-white shadow-lg transition transform active:scale-95 flex items-center gap-2 ${cls.status === 'Live' ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-200' : 'bg-gray-300 cursor-not-allowed'}`}
                    >
                        <FaPlay className="text-xs" /> {cls.status === 'Live' ? 'Join Stream' : 'Wait'}
                    </button>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* REAL COURSE LIST (From Database) */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">My Tech Stack ({courses.length})</h2>
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 overflow-x-auto">
        {courses.length > 0 ? (
          <div className="space-y-4">
            {courses.map((course) => (
                <div key={course._id} onClick={() => navigate('/classroom')} className="flex flex-col md:flex-row items-center justify-between p-4 border border-gray-50 rounded-2xl hover:bg-gray-50 transition group cursor-pointer">
                    <div className="flex items-center gap-4 w-full md:w-1/3">
                        {course.thumbnail ? (
                           <img src={course.thumbnail} alt={course.title} className="w-12 h-12 rounded-xl object-cover shadow-sm" />
                        ) : (
                           <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm bg-blue-600">JS</div>
                        )}
                        <div>
                            <h4 className="font-bold text-gray-800">{course.title}</h4>
                            <div className="text-xs text-gray-400 mt-0.5">{course.category} • by {course.tutor}</div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 px-2 my-4 md:my-0">
                        <div className="w-full bg-gray-100 rounded-full h-2">
                            <div className="h-2 rounded-full bg-blue-500" style={{ width: '50%' }}></div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/6 flex justify-end">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border bg-white border-blue-200 text-blue-600">
                             <FaSpinner className="animate-spin-slow" /> In Progress
                        </div>
                    </div>
                </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-gray-400">
             <p>No courses found. Add one from the Admin Panel!</p>
          </div>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value }) => (
  <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4 transition hover:transform hover:-translate-y-1">
    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-xl">{icon}</div>
    <div>
      <h4 className="text-2xl font-bold text-gray-800">{value}</h4>
      <p className="text-xs text-gray-400 font-bold uppercase tracking-wide">{label}</p>
    </div>
  </div>
);

export default Dashboard;