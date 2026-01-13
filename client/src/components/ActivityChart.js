// src/components/ActivityChart.js
import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const ActivityChart = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm h-full flex flex-col">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Learning Activity</h2>
      <div className="flex-1 w-full min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="date" 
              tickFormatter={(date) => new Date(date).getDate()} // Show only the day number (e.g., "12")
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
            />
            <Tooltip 
              cursor={{ fill: '#F3F4F6' }}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Bar dataKey="totalHours" radius={[4, 4, 4, 4]} barSize={20}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.totalHours > 3 ? '#4F46E5' : '#E5E7EB'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityChart;