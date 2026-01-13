import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';

function App() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      {/* We add ml-64 to push content to the right of the fixed sidebar */}
      <div className="flex-1 ml-64 p-8">
        
        {/* Header Placeholder (We will build this next) */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Overview</h1>
          <div className="text-gray-500">User Profile Placeholder</div>
        </header>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/routine" element={<div>Routine Page</div>} />
        </Routes>

      </div>
    </div>
  );
}

export default App;