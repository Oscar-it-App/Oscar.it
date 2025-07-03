// FILE: src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-600 text-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold tracking-tight hover:opacity-90">
        OSCAR<span className="text-black">.it</span>
      </Link>
      <nav className="space-x-4">
        <Link to="/dashboard" className="hover:text-black font-medium">Dashboard</Link>
        <Link to="/login" className="bg-white text-green-600 px-4 py-1 rounded-full font-semibold hover:bg-gray-100">Log In</Link>
      </nav>
    </header>
  );
};

export default Header;

// FILE: src/pages/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  return <div className="p-6 text-lg">Welcome to the OSCAR dashboard!</div>;
};

export default Dashboard;
