import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
// NOTICE: No "BrowserRouter" here!

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CoursePlayer from './pages/CoursePlayer';
import Exam from './pages/Exam';
import Sidebar from './components/Sidebar';
import MyCourses from './pages/MyCourses';

// Helper to protect routes
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

const App = () => {
  const location = useLocation();
  // Hide sidebar on login/register screens
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="flex">
      {!isAuthPage && <Sidebar />}

      <div className="flex-1">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        
          <Route path="/dashboard" element={
            <ProtectedRoute> <Dashboard /> </ProtectedRoute>
          } />
          <Route path="/my-courses" element={
          <ProtectedRoute> <MyCourses /> </ProtectedRoute>
          } />
          <Route path="/player/:id" element={
            <ProtectedRoute> <CoursePlayer /> </ProtectedRoute>
          } />

          <Route path="/exam" element={
            <ProtectedRoute> <Exam /> </ProtectedRoute>
          } />

          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;