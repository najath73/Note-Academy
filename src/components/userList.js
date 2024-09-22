import React from 'react';

const UsersList = () => {
  const users = [
    { id: 1, name: 'John Doe', username: '@johndoe' },
    { id: 2, name: 'Jane Smith', username: '@janesmith' },
    { id: 3, name: 'Paul Johnson', username: '@paulj' },
    // Ajoute plus d'utilisateurs si nécessaire
  ];

  return (
    <div className="w-full bg-gray-800 p-4 rounded-lg text-white">
      <h2 className="text-xl font-bold mb-4">Utilisateurs</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg">{user.name}</h3>
              <p className="text-gray-400">{user.username}</p>
            </div>
            <button className="text-sm bg-blue-500 py-1 px-2 rounded-lg">Message</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
