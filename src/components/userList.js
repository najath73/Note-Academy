import React from 'react';

const UsersList = () => {
  const users = [
    { id: 1, name: 'teacher', username: '@hello teacher', initial: 'T' },
    { id: 2, name: 'Yassin', username: '@STUDENT', initial: 'Y' },
    { id: 3, name: 'Yassin Lgaout', username: '@Gothem', initial: 'YL' },
    { id: 4, name: 'ANASS', username: '@TESTTEST', initial: 'A' },
    { id: 5, name: 'Lina', username: '@Lina', initial: 'L' },
    { id: 6, name: 'Tom', username: '@Tommy', initial: 'T' },
  ];

  return (
    <div className="w-full bg-gray-800 p-4 rounded-lg text-white">
      <h2 className="text-xl font-bold mb-4">Top Teacher</h2>
      <div className="grid grid-cols-2 gap-4">
        {users.map(user => (
          <div key={user.id} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
            <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-2">
              {user.initial}
            </div>
            <h3 className="text-lg">{user.name}</h3>
            <p className="text-gray-400">{user.username}</p>
            <button className="mt-2 bg-purple-600 hover:bg-purple-700 text-white text-sm py-1 px-4 rounded-lg">
              Message
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
