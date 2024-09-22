import React from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import { Home, Explore, Create, Message, Logout } from '@mui/icons-material'; // Icons
import { Avatar, Button } from '@mui/material'; // Avatar and Button for user profile
import { useAuth } from '../hooks/authContext'; // Importer le contexte d'authentification

function Sidebar() {
  const { user, logout } = useAuth(); // Récupérer l'utilisateur connecté et la fonction logout du contexte
  const navigate = useNavigate(); // Pour rediriger l'utilisateur après déconnexion

  const handleLogout = () => {
    logout(); // Déconnexion de l'utilisateur
    navigate('/login'); // Redirection vers la page de connexion après déconnexion
  };

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
          {user ? (
            <>
              {/* Si l'utilisateur est connecté, afficher ses informations */}
              <p className="text-lg font-bold">{user.username}</p>
              <p className="text-sm text-gray-400">{user.email}</p>
            </>
          ) : (
            <>
              {/* Si l'utilisateur n'est pas connecté, afficher un message générique */}
              <p className="text-lg font-bold">Guest</p>
              <p className="text-sm text-gray-400">guest@example.com</p>
            </>
          )}
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
        <a href="add-post" className="flex items-center space-x-2 hover:bg-gray-800 p-2 rounded-lg">
          <Create />
          <span>Create Post</span>
        </a>
        <Link to="/message" className="flex items-center space-x-2 hover:bg-gray-800 p-2 rounded-lg">
          <Message />
          <span>Message</span>
        </Link>

        {/* Bouton dynamique : Logout si l'utilisateur est connecté, S'inscrire sinon */}
        {user ? (
          <a
            onClick={handleLogout}
            className="flex items-center space-x-2 hover:bg-gray-800 p-2 rounded-lg"
          >
            <Logout />
            <span>Logout</span>
          </a>
        ) : (
          <Link to="/register" className="flex items-center space-x-2 hover:bg-gray-800 p-2 rounded-lg">
            <Button variant="contained" color="primary">
              S'inscrire
            </Button>
          </Link>
        )}
      </nav>
    </div>
  );
}

export default Sidebar;
