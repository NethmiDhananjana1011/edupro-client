import React from 'react';
import { FaBookOpen, FaClock, FaCheckCircle, FaFire, FaPlay, FaCalendarAlt, FaChevronRight, FaCheck, FaSpinner } from 'react-icons/fa';

const Dashboard = () => {
  
  // --- DATA: UPCOMING CLASSES ---
  const upcomingClasses = [
    { id: 1, title: "Newtonian Mechanics - Class 5", subject: "Physics 1", tutor: "Rakesh Ahmed", date: "15th Oct, 2026", time: "12:00 PM", status: "Live", timeLeft: "2 min left", img: "https://i.pravatar.cc/150?u=rakesh", color: "orange" },
    { id: 2, title: "Polymer - Class 3", subject: "Chemistry 1", tutor: "Khalil Khan", date: "15th Oct, 2026", time: "02:00 PM", status: "Upcoming", timeLeft: "4 hr left", img: "https://i.pravatar.cc/150?u=khalil", color: "blue" }
  ];

  // --- DATA: ADVANCED COURSE LIST ---
  const courses = [
    { id: 1, title: "Physics 1", chapters: 5, lectures: 30, progress: 30, score: 80, status: "In progress", color: "bg-orange-500", text: "P" },
    { id: 2, title: "Physics 2", chapters: 5, lectures: 30, progress: 30, score: 80, status: "In progress", color: "bg-orange-500", text: "P" },
    { id: 3, title: "Chemistry 1", chapters: 5, lectures: 30, progress: 30, score: 70, status: "In progress", color: "bg-cyan-500", text: "C" },
    { id: 4, title: "Chemistry 2", chapters: 5, lectures: 30, progress: 30, score: 80, status: "In progress", color: "bg-cyan-500", text: "C" },
    { id: 5, title: "Higher math 1", chapters: 5, lectures: 30, progress: 100, score: 90, status: "Completed", color: "bg-blue-600", text: "H" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans text-gray-800">
      
      {/* HEADER */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Hello, Anika! 👋</h1>
          <p className="text-gray-500 text-sm mt-1">Keep up the hard work, you're doing great!</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-2 pr-4 rounded-full shadow-sm border border-gray-100">
          <img src="https://i.pravatar.cc/150?img=32" alt="Profile" className="w-10 h-10 rounded-full" />
          <span className="text-sm font-bold text-gray-700">Anika Ahmed</span>
        </div>
      </header>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col relative overflow-hidden">
          <h3 className="text-gray-700 font-bold mb-4">Overall Performance</h3>
          <div className="flex-1 flex items-center justify-center">
             <div className="relative w-44 h-44 rounded-full flex items-center justify-center"
                 style={{ background: `conic-gradient(#10B981 80%, #F3F4F6 0)` }}>
              <div className="bg-white w-36 h-36 rounded-full flex flex-col items-center justify-center z-10 shadow-inner">
                <span className="text-4xl font-extrabold text-gray-800">80%</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Pro Learner</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            <StatCard icon={<FaBookOpen className="text-emerald-500" />} label="Total Enrolled" value="5" />
            <StatCard icon={<FaCheckCircle className="text-blue-500" />} label="Completed" value="1" />
            <StatCard icon={<FaClock className="text-pink-500" />} label="Hours Spent" value="112h" />
            <StatCard icon={<FaFire className="text-orange-500" />} label="Assignment Done" value="10/15" />
        </div>
      </div>

      {/* UPCOMING CLASSES */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming classes</h2>
        <div className="grid grid-cols-1 gap-4">
          {upcomingClasses.map((cls) => (
            <div key={cls.id} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between hover:shadow-md transition gap-4">
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <img src={cls.img} alt={cls.tutor} className="w-14 h-14 rounded-2xl object-cover shadow-sm" />
                    <div>
                        <h4 className="font-bold text-lg text-gray-800">{cls.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide ${cls.color === 'orange' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'}`}>{cls.subject}</span>
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
                    <span className={`text-xs font-bold flex items-center gap-1 ${cls.status === 'Live' ? 'text-red-500' : 'text-blue-500'}`}>
                       <div className={`w-2 h-2 rounded-full ${cls.status === 'Live' ? 'bg-red-500 animate-pulse' : 'bg-blue-500'}`}></div> {cls.timeLeft}
                    </span>
                    <button className={`px-6 py-2.5 rounded-xl text-sm font-bold text-white shadow-lg transition transform active:scale-95 flex items-center gap-2 ${cls.status === 'Live' ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-200' : 'bg-emerald-300 cursor-not-allowed opacity-80'}`}>
                        <FaPlay className="text-xs" /> Join Class
                    </button>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- NEW ADVANCED COURSE LIST --- */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">Total courses ({courses.length})</h2>
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 overflow-x-auto">
        
        {/* Table Header */}
        <div className="hidden md:flex justify-between text-xs font-bold text-gray-400 uppercase mb-4 px-4">
            <div className="w-1/3">Course name</div>
            <div className="w-1/4">Progress</div>
            <div className="w-1/6 text-center">Overall score</div>
            <div className="w-1/6 text-right">Status</div>
        </div>

        {/* Table Rows */}
        <div className="space-y-4">
            {courses.map((course) => (
                <div key={course.id} className="flex flex-col md:flex-row items-center justify-between p-4 border border-gray-50 rounded-2xl hover:bg-gray-50 transition group">
                    
                    {/* 1. Name & Info */}
                    <div className="flex items-center gap-4 w-full md:w-1/3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm ${course.color}`}>
                            {course.text}
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800">{course.title}</h4>
                            <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
                                <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div> {course.chapters} chapter</span>
                                <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div> {course.lectures} lecture</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. Progress Bar */}
                    <div className="w-full md:w-1/4 px-2 my-4 md:my-0">
                        <div className="w-full bg-gray-100 rounded-full h-2">
                            <div 
                                className={`h-2 rounded-full ${course.progress === 100 ? 'bg-emerald-500' : 'bg-orange-400'}`} 
                                style={{ width: `${course.progress}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* 3. Overall Score */}
                    <div className="w-full md:w-1/6 text-center font-bold text-gray-700">
                        {course.score}%
                    </div>

                    {/* 4. Status Badge */}
                    <div className="w-full md:w-1/6 flex justify-end">
                        <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border transition
                            ${course.status === 'Completed' 
                                ? 'bg-white border-emerald-200 text-emerald-600' 
                                : 'bg-white border-orange-200 text-orange-600'
                            }`}
                        >
                            {course.status === 'Completed' ? <FaCheck /> : <FaSpinner className="animate-spin-slow" />}
                            {course.status}
                        </div>
                        
                        {/* Arrow Icon (only shows on hover) */}
                        <div className="w-8 h-8 flex items-center justify-center text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity ml-2">
                            <FaChevronRight />
                        </div>
                    </div>

                </div>
            ))}
        </div>
      </div>

    </div>
  );
};

// --- HELPER COMPONENT FOR STATS ---
const StatCard = ({ icon, label, value }) => (
  <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4 transition hover:transform hover:-translate-y-1">
    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-xl">
      {icon}
    </div>
    <div>
      <h4 className="text-2xl font-bold text-gray-800">{value}</h4>
      <p className="text-xs text-gray-400 font-bold uppercase tracking-wide">{label}</p>
    </div>
  </div>
);

export default Dashboard;