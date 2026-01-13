// src/components/UpcomingTasks.js
import React from 'react';
import { FaClock, FaExclamationCircle } from 'react-icons/fa';

const UpcomingTasks = ({ assignments }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Tasks</h2>
      
      <div className="space-y-4">
        {assignments.length === 0 ? (
          <p className="text-gray-400 text-sm">No pending assignments.</p>
        ) : (
          assignments.map((task, index) => (
            <div key={index} className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              {/* Icon Box */}
              <div className="w-10 h-10 rounded-lg bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0">
                <FaExclamationCircle />
              </div>
              
              {/* Text Info */}
              <div>
                <h4 className="font-bold text-gray-800 text-sm">{task.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{task.courseName}</p>
                
                <div className="flex items-center gap-1 mt-2 text-xs font-medium text-orange-500">
                  <FaClock />
                  {/* Calculate days left */}
                  <span>
                    {Math.ceil((new Date(task.dueDate) - new Date()) / (1000 * 60 * 60 * 24))} days left
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <button className="w-full mt-6 py-2 rounded-xl border border-gray-200 text-gray-500 text-sm font-semibold hover:bg-gray-50">
        View All Tasks
      </button>
    </div>
  );
};

export default UpcomingTasks;