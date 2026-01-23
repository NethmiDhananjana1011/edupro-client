import React, { useState } from 'react';
import {
    FaUserGraduate, FaChalkboardTeacher, FaDollarSign, FaUsers,
    FaPlus, FaTrash, FaEdit, FaSearch, FaEllipsisV
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    // Mock Data for Users
    const [users, setUsers] = useState([
        { id: 1, name: "Anika Ahmed", email: "anika@test.com", role: "Student", joinDate: "10 Oct, 2026", status: "Active" },
        { id: 2, name: "Rahim Khan", email: "rahim@test.com", role: "Student", joinDate: "12 Oct, 2026", status: "Active" },
        { id: 3, name: "Sarah Jenkins", email: "sarah@edupro.com", role: "Tutor", joinDate: "14 Oct, 2026", status: "Active" },
        { id: 4, name: "Mike Chen", email: "mike@test.com", role: "Student", joinDate: "15 Oct, 2026", status: "Inactive" },
        { id: 5, name: "Alex Coder", email: "alex@test.com", role: "Student", joinDate: "16 Oct, 2026", status: "Active" },
    ]);

    // Mock Data for Stats
    const stats = [
        { label: "Total Students", value: "1,240", icon: <FaUserGraduate />, color: "bg-blue-500" },
        { label: "Total Tutors", value: "45", icon: <FaChalkboardTeacher />, color: "bg-purple-500" },
        { label: "Active Courses", value: "12", icon: <FaUsers />, color: "bg-emerald-500" },
        { label: "Revenue (Oct)", value: "$4,500", icon: <FaDollarSign />, color: "bg-orange-500" },
    ];

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            setUsers(users.filter(user => user.id !== id));
        }
    };

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 font-sans flex">

            {/* --- ADMIN SIDEBAR --- */}
            <div className="w-64 bg-gray-900 text-white flex flex-col p-6 sticky top-0 h-screen">
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-lg">E</div>
                    <span className="text-xl font-bold tracking-wide">EduPro Admin</span>
                </div>

                <nav className="space-y-2 flex-1">
                    <button className="w-full flex items-center gap-4 px-4 py-3 bg-gray-800 rounded-xl text-emerald-400 font-bold shadow-lg">
                        <FaChalkboardTeacher /> Dashboard
                    </button>
                    <button className="w-full flex items-center gap-4 px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white rounded-xl transition font-bold">
                        <FaUsers /> Manage Users
                    </button>
                    <button className="w-full flex items-center gap-4 px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white rounded-xl transition font-bold">
                        <FaEdit /> Manage Courses
                    </button>
                </nav>

                <div className="mt-auto pt-6 border-t border-gray-800">
                    <div className="flex items-center gap-3">
                        <img src="https://i.pravatar.cc/150?img=11" alt="Admin" className="w-10 h-10 rounded-full border-2 border-emerald-500" />
                        <div>
                            <p className="text-sm font-bold text-white">Super Admin</p>
                            <p className="text-xs text-gray-500">admin@edupro.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- MAIN CONTENT --- */}
            <div className="flex-1 p-8 overflow-y-auto">

                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
                        <p className="text-gray-500 text-sm">Welcome back, Admin!</p>
                    </div>
                    <button
                        onClick={() => navigate('/admin/add-course')}
                        className="bg-emerald-600 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg hover:bg-emerald-700 transition flex items-center gap-2"
                    >
                        <FaPlus /> Add New Course
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                                <p className="text-xs text-gray-400 font-bold uppercase">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent Users Table */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="font-bold text-lg text-gray-800">Recent Users</h3>
                        <div className="relative">
                            <FaSearch className="absolute left-3 top-3 text-gray-400" />
                            <input type="text" placeholder="Search user..." className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-emerald-500 transition" />
                        </div>
                    </div>

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                                <th className="p-4 font-bold">User</th>
                                <th className="p-4 font-bold">Role</th>
                                <th className="p-4 font-bold">Status</th>
                                <th className="p-4 font-bold">Joined</th>
                                <th className="p-4 font-bold text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50 transition">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-800 text-sm">{user.name}</p>
                                                <p className="text-xs text-gray-400">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm font-bold text-gray-600">{user.role}</td>
                                    <td className="p-4">
                                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${user.status === 'Active' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-sm text-gray-500">{user.joinDate}</td>
                                    <td className="p-4 text-right">
                                        <button onClick={() => handleDelete(user.id)} className="text-red-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition">
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default AdminDashboard;