// src/components/CourseList.js
import React from 'react';

const CourseList = ({ courses }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">My Courses</h2>
        <button className="text-primary text-sm font-medium hover:underline">View All</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-400 text-sm border-b border-gray-100">
              <th className="pb-3 font-medium">Course Name</th>
              <th className="pb-3 font-medium">Start Date</th>
              <th className="pb-3 font-medium">Lesson</th>
              <th className="pb-3 font-medium">Rate</th>
              <th className="pb-3 font-medium">Level</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {courses.map((enrollment, index) => (
              <tr key={index} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                <td className="py-4 flex items-center gap-3">
                  {/* Thumbnail */}
                  <div className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden">
                     <img src={`https://ui-avatars.com/api/?name=${enrollment.course.title}&background=random`} alt="course" />
                  </div>
                  <span className="font-semibold text-gray-700">{enrollment.course.title}</span>
                </td>
                <td className="py-4 text-gray-500">Oct 24, 2022</td> {/* Static date for now */}
                <td className="py-4 text-gray-500">{enrollment.course.totalChapters} Lessons</td>
                <td className="py-4 w-1/4 pr-4">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-700">{enrollment.progress}%</span>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full" 
                        style={{ width: `${enrollment.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-gray-500">Intermediate</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseList;