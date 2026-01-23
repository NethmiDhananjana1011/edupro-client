import React from 'react';
import { FaClock, FaVideo, FaChalkboardTeacher, FaLaptopCode } from 'react-icons/fa';

const Routine = () => {
  const schedule = [
    { day: "Monday", classes: [
        { time: "10:00 AM", subject: "Front End", topic: "CSS Grid & Flexbox", tutor: "Sarah Jenkins", color: "bg-blue-50 text-blue-700 border-blue-200" },
        { time: "02:00 PM", subject: "Back End", topic: "Node.js API Setup", tutor: "Michael Chen", color: "bg-emerald-50 text-emerald-700 border-emerald-200" }
      ] 
    },
    { day: "Tuesday", classes: [
        { time: "11:00 AM", subject: "Database", topic: "MongoDB Aggregation", tutor: "Alex Ray", color: "bg-green-50 text-green-700 border-green-200" }
      ] 
    },
    { day: "Wednesday", classes: [
        { time: "10:00 AM", subject: "Python", topic: "Pandas for Data Analysis", tutor: "Dr. Alan", color: "bg-yellow-50 text-yellow-700 border-yellow-200" },
        { time: "04:00 PM", subject: "Cyber Sec", topic: "Ethical Hacking 101", tutor: "Mr. Robot", color: "bg-red-50 text-red-700 border-red-200" }
      ] 
    },
    { day: "Thursday", classes: [] },
    { day: "Friday", classes: [
        { time: "09:00 AM", subject: "DevOps", topic: "Docker & Kubernetes", tutor: "Jane Doe", color: "bg-purple-50 text-purple-700 border-purple-200" }
      ] 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Coding Bootcamps Schedule 📅</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schedule.map((dayPlan, index) => (
          <div key={index} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">{dayPlan.day}</h2>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${dayPlan.classes.length > 0 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>{dayPlan.classes.length} Sessions</span>
            </div>
            <div className="space-y-4 flex-1">
              {dayPlan.classes.length > 0 ? (
                dayPlan.classes.map((cls, idx) => (
                  <div key={idx} className={`p-4 rounded-2xl border ${cls.color} relative overflow-hidden transition hover:scale-[1.02]`}>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-extrabold uppercase tracking-wider opacity-70">{cls.subject}</span>
                      <FaLaptopCode className="opacity-50" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{cls.topic}</h3>
                    <div className="flex items-center gap-3 text-xs font-bold opacity-80 mt-3">
                      <div className="flex items-center gap-1"><FaClock /> {cls.time}</div>
                      <div className="flex items-center gap-1 ml-auto"><FaChalkboardTeacher /> {cls.tutor}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-300 pb-4">
                  <div className="text-4xl mb-2">☕</div>
                  <p className="text-sm font-bold">Code Free Day!</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Routine;