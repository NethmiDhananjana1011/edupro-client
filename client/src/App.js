import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthContext, { AuthProvider } from './context/AuthContext';

// Create a component to protect routes
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <div>Loading...</div>;
  return user ? children : <Navigate to="/login" />;
};

// Create a Layout component so Sidebar only shows when logged in
const AppLayout = ({ children }) => (
  <div className="flex bg-gray-50 min-h-screen">
    <Sidebar />
    <div className="flex-1 ml-64 p-8">
      {/* Header Placeholder */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Overview</h1>
        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
           {/* Display User Avatar here later */}
           <img src="https://ui-avatars.com/api/?name=User" alt="Profile" />
        </div>
      </header>
      {children}
    </div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route path="/" element={
          <PrivateRoute>
            <AppLayout>
              <Dashboard />
            </AppLayout>
          </PrivateRoute>
        } />
        
        <Route path="/courses" element={
          <PrivateRoute>
            <AppLayout>
              <Courses />
            </AppLayout>
          </PrivateRoute>
        } />
      </Routes>
    </AuthProvider>
  );
}

export default App;