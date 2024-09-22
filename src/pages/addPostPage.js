import React from 'react';
import Sidebar from '../components/sidebar';  // ton composant Sidebar
import AddPost from '../components/addPost';

const AddPostPage = () => {
  return (
    <div className="flex bg-gray-900 min-h-screen text-white">
      {/* Sidebar à gauche */}
      <div className="w-1/5">
        <Sidebar />
      </div>

      {/* Fil d'actualité au centre avec scroll */}
      <div className="w-3/5 h-screen overflow-y-scroll p-4">
        <AddPost />
      </div>

      
    </div>
  );
};

export default AddPostPage;