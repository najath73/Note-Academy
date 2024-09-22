import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Explore, Create, Message, Logout } from '@mui/icons-material'; // Icons
import { Avatar } from '@mui/material'; // Avatar for user profile

function Sidebar() {
  return (
    <div className="bg-black text-white h-screen w-64 p-4 flex flex-col justify-between">

      <div className="text-3xl font-bold mb-10">Note Academy</div>

      {/* User Details */}
      <div className="flex flex-col items-center">
        <Avatar
          alt="User"
          src="/static/images/avatar/1.jpg" // Placeholder image (you can replace this later)
          className="mb-4"
          sx={{ width: 80, height: 80 }}
        />
        <div className="text-center">
          <p className="text-lg font-bold">User Name</p>
          <p className="text-sm text-gray-400">useremail@gmail.com</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex flex-col mt-10 space-y-4">
      <Link to="/" className="flex items-center space-x-2 hover:bg-gray-800 p-2 rounded-lg">
            <Home />
            <span>Home</span>
        </Link>
        <Link to="/explore" className="flex items-center space-x-2 hover:bg-gray-800 p-2 rounded-lg">
            <Explore />
            <span>Explore</span>
        </Link>
        <a href="#create-post" className="flex items-center space-x-2 hover:bg-gray-800 p-2 rounded-lg">
          <Create />
          <span>Create Post</span>
        </a>
        <Link to="/message" className="flex items-center space-x-2 hover:bg-gray-800 p-2 rounded-lg">
            <Message />
            <span>Message</span>
        </Link>
        <a href="#logout" className="flex items-center space-x-2 hover:bg-gray-800 p-2 rounded-lg">
          <Logout />
          <span>Logout</span>
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;
