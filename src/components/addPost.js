import React, { useState } from 'react';

const AddPost = () => {
  const [content, setContent] = useState('');

  // Gestion de la modification du contenu du post
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // À modifier quand l'API sera prête pour envoyer le contenu du post
    console.log('Post content:', content);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-8">Create a Post</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl">
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder="What's on your mind?"
          className="w-full h-48 p-4 rounded-lg bg-gray-800 text-white resize-none focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="mt-4 w-full bg-purple-500 px-4 py-2 rounded-lg text-lg font-bold"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
