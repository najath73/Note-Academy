import React from 'react';
import Sidebar from '../components/sidebar';  // ton composant Sidebar
import Feed from '../components/feed';        // ton composant Feed
import UsersList from '../components/userList'; // le nouveau composant pour la liste des utilisateurs

const HomePage = () => {
  return (
    <div className="flex bg-gray-900 min-h-screen text-white">
      {/* Sidebar à gauche */}
      <div className="w-1/5">
        <Sidebar />
      </div>

      {/* Fil d'actualité au centre */}
      <div className="w-3/5 p-4">
        <Feed />
      </div>

      {/* Liste des utilisateurs à droite */}
      <div className="w-1/5 p-4">
        <UsersList />
      </div>
    </div>
  );
};

export default HomePage;
