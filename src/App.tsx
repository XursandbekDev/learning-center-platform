import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import './index.css';

// Create a wrapper component to handle route-specific rendering
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/auth/login';
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {!isLoginPage && (
        <>
          {/* Sidebar component */}
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
  
          <div className="flex-1 flex flex-col">
            {/* Navbar component */}
            <Navbar  />
  
            {/* Main Content */}
            <main className="flex-1 p-4 sm:ml-64">
              {children}
            </main>
          </div>
        </>
      )}
      {isLoginPage && (
        <main className="flex-1 p-4">
          {children}
        </main>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          {/* <Route path="/admin" element={<Admin />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

