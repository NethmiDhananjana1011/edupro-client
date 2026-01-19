import React, { useState } from 'react';
import { FaPlay, FaFileAlt, FaClipboardCheck, FaBullhorn, FaExclamationCircle } from 'react-icons/fa';

const MyCourses = () => {
  const [activeTab, setActiveTab] = useState('Chapters');

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      
      {/* --- HEADER & STATS --- */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Physics 1st paper</h1>
        <p className="text-gray-500 text-sm mb-6">Total 5 chapters</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCircle label="Overall progress" value="80%" color="#10B981" />
          <StatCircle label="Live class attended" value="70%" color="#3B82F6" />
          <StatCircle label="Assignment done" value="70%" color="#6366F1" />
          <StatCircle label="Live test success" value="70%" color="#F59E0B" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- LEFT COLUMN (MAIN CONTENT) --- */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* TABS */}
          <div className="flex gap-4 border-b border-gray-200 pb-2 overflow-x-auto">
            {['Chapters (5)', 'Recording (35)', 'Assignment (2)', 'Quiz (1)'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.split(' ')[0])}
                className={`px-4 py-2 rounded-full text-sm font-bold transition whitespace-nowrap ${
                  activeTab === tab.split(' ')[0] 
                    ? 'bg-emerald-100 text-emerald-600' 
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* CHAPTER LIST */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-emerald-50 p-4 border-b border-emerald-100 flex justify-between items-center">
              <h3 className="font-bold text-gray-800">Chapter 1: Newtonian Mechanics</h3>
              <span className="text-emerald-600 font-bold text-sm">Open</span>
            </div>
            
            <div className="p-4 space-y-4">
              <TopicRow title="Physics 1 - Intro" type="Video" progress={30} score={80} status="In Progress" />
              <TopicRow title="Newton's Laws" type="Quiz" progress={60} score={90} status="In Progress" />
              <TopicRow title="Momentum" type="Assignment" progress={0} score={0} status="Locked" />
              <TopicRow title="Friction & Motion" type="Live Class" progress={100} score={95} status="Completed" />
            </div>
          </div>
          
           {/* CLOSED CHAPTER (Example) */}
           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex justify-between items-center opacity-70">
              <h3 className="font-bold text-gray-500">Chapter 2: Work, Energy and Power</h3>
              <span className="text-gray-400 text-xl">▼</span>
           </div>

        </div>

        {/* --- RIGHT COLUMN (SIDEBAR) --- */}
        <div className="space-y-6">
          
          {/* NOTICE BOARD */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800 flex items-center gap-2">
                <FaBullhorn className="text-orange-500"/> Notice board
              </h3>
              <span className="bg-gray-100 text-xs font-bold px-2 py-1 rounded text-gray-500">1</span>
            </div>
            <div className="text-sm text-gray-600 bg-orange-50 p-3 rounded-xl border border-orange-100">
              📅 <strong>Physics Exam</strong> is scheduled for next Tuesday at 10:00 AM.
            </div>
          </div>

          {/* AREA OF IMPROVEMENT */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4">Area of improvement</h3>
            <div className="space-y-3">
              <ImprovementItem 
                color="text-yellow-500" 
                title="Vector 2: 60% complete" 
                desc="Falling behind in assignments." 
              />
              <ImprovementItem 
                color="text-red-500" 
                title="Force Quiz 1: Score 40%" 
                desc="Retake quiz to boost your grade." 
              />
            </div>
          </div>

          {/* LEADERBOARD */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4 flex justify-between">
              Leader board <button className="text-xs text-blue-500">See all</button>
            </h3>
            <div className="space-y-4">
               <LeaderRow rank="01" name="Anika Ahmed" score="98%" />
               <LeaderRow rank="02" name="Rahim Ali" score="95%" />
               <LeaderRow rank="03" name="Sara Khan" score="92%" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS for Clean Code ---

const StatCircle = ({ label, value, color }) => (
  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
    <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-gray-50"
         style={{ background: `conic-gradient(${color} ${value}, #e5e7eb 0)` }}>
        <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-xs font-bold">
            {value}
        </div>
    </div>
    <div className="text-sm font-bold text-gray-600">{label}</div>
  </div>
);

const TopicRow = ({ title, type, progress, score, status }) => {
  const isCompleted = status === "Completed";
  const isLocked = status === "Locked";

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition">
      <div className="flex flex-col w-full md:w-1/3">
        <span className="font-bold text-gray-800 text-sm">{title}</span>
        <span className="text-xs text-gray-400 flex items-center gap-1">
           {type === 'Video' && <FaPlay className="text-[10px]"/>}
           {type === 'Quiz' && <FaClipboardCheck className="text-[10px]"/>}
           {type} • 1 Assignment
        </span>
      </div>

      <div className="w-full md:w-1/3 px-2 my-2 md:my-0">
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
          <div className={`h-1.5 rounded-full ${isCompleted ? 'bg-emerald-500' : 'bg-orange-400'}`} style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex justify-between text-[10px] text-gray-400 font-bold">
            <span>{progress}%</span>
            <span>Score: {score}%</span>
        </div>
      </div>

      <button disabled={isLocked} className={`px-4 py-1.5 rounded-lg text-xs font-bold border transition ${
        isCompleted ? 'border-emerald-200 text-emerald-600 bg-emerald-50' : 
        isLocked ? 'bg-gray-100 text-gray-400 cursor-not-allowed' :
        'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
      }`}>
        {isLocked ? "Locked" : isCompleted ? "Review" : "Start"}
      </button>
    </div>
  );
};

const ImprovementItem = ({ color, title, desc }) => (
  <div className="flex gap-3 items-start p-3 bg-gray-50 rounded-xl">
    <FaExclamationCircle className={`mt-1 ${color}`} />
    <div>
      <h4 className={`text-xs font-bold ${color}`}>{title}</h4>
      <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
    </div>
  </div>
);

const LeaderRow = ({ rank, name, score }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
        <span className="font-bold text-gray-300 text-sm">{rank}</span>
        <img src={`https://i.pravatar.cc/150?u=${name}`} alt={name} className="w-8 h-8 rounded-full" />
        <span className="text-sm font-bold text-gray-700">{name}</span>
    </div>
    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">{score}</span>
  </div>
);

export default MyCourses;