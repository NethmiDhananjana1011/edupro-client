import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaBookOpen, FaCheckCircle, FaClock } from 'react-icons/fa';

import CourseList from '../components/CourseList';
import ActivityChart from '../components/ActivityChart';
import UpcomingTasks from '../components/UpcomingTasks';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [courses, setCourses] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. GET TOKEN
        const token = localStorage.getItem('token');
        const config = {
          headers: { 'auth-token': token }
        };

        // 2. ATTACH TOKEN TO EVERY REQUEST
        const [statsRes, coursesRes, chartRes, tasksRes] = await Promise.all([
          axios.get('http://localhost:5000/api/dashboard/stats', config),
          axios.get('http://localhost:5000/api/dashboard/enrolled-courses', config),
          axios.get('http://localhost:5000/api/dashboard/activity-chart', config),
          axios.get('http://localhost:5000/api/dashboard/upcoming', config)
        ]);

        setStats(statsRes.data);
        setCourses(coursesRes.data);
        setChartData(chartRes.data);
        setUpcoming(tasksRes.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-gray-500 p-10">Loading Dashboard...</div>;

  return (
    <div className="space-y-6">
      {/* 1. TOP STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Enrolled" value={stats?.totalEnrolled} icon={<FaBookOpen />} color="blue" />
        <StatCard title="Course Completed" value={stats?.completedCourses} icon={<FaCheckCircle />} color="green" />
        <StatCard title="Total Hours" value={`${stats?.totalHours || 0}h`} icon={<FaClock />} color="orange" />
      </div>

      {/* 2. MIDDLE SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Show message if no courses found */}
          {courses.length === 0 ? (
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center py-10">
              <h3 className="text-gray-500">You haven't enrolled in any courses yet!</h3>
            </div>
          ) : (
            <CourseList courses={courses} />
          )}
        </div>

        <div className="lg:col-span-1 flex flex-col gap-6">
          <ActivityChart data={chartData} />
          <UpcomingTasks assignments={upcoming} />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, color }) => {
  const colors = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600",
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm flex items-center gap-4">
      <div className={`p-4 rounded-xl text-2xl ${colors[color]}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <p className="text-3xl font-bold text-gray-800">{value || 0}</p>
      </div>
    </div>
  );
};

export default Dashboard;