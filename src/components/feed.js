import React from 'react';
import { HeartIcon, ChatIcon, ShareIcon } from '@heroicons/react/solid'; // Tailwind Heroicons pour des icônes modernes

function Feed() {
  const posts = [
    {
      id: 1,
      username: 'Teacher1',
      content: 'Hello, this is my first post!',
      imageUrl: 'https://via.placeholder.com/600x300',
      likes: 120,
      comments: 45,
    },
    {
      id: 2,
      username: 'Teacher2',
      content: 'Loving the new platform!',
      imageUrl: 'https://via.placeholder.com/600x300',
      likes: 95,
      comments: 30,
    },
  ];

  return (
    <div className="flex-1 p-4 space-y-4">
      <h1 className="text-3xl font-bold mb-10">Home Feed</h1>
      {posts.map((post) => (
        <div key={post.id} className="bg-gray-900 p-4 rounded-lg text-white shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-700 rounded-full" /> {/* Image de profil */}
            <div className="font-bold">{post.username}</div>
          </div>
          <div className="mt-2">{post.content}</div>
          <img src={post.imageUrl} alt="post" className="mt-4 rounded-lg shadow-md" />
          
          {/* Boutons d'interaction */}
          <div className="flex items-center justify-between mt-4 text-gray-400">
            <div className="flex items-center space-x-2">
              <HeartIcon className="w-6 h-6 hover:text-red-600 cursor-pointer" />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChatIcon className="w-6 h-6 hover:text-blue-600 cursor-pointer" />
              <span>{post.comments}</span>
            </div>
            <ShareIcon className="w-6 h-6 hover:text-green-600 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
