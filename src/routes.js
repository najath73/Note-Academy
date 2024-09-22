import React from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import Register from './pages/register'
import Login from './pages/login';
import HomePage from './pages/homepage'
import MessagingPage from './pages/message'

const AppRoutes = ()=> {
    return (
  
      <Routes>
        {/* Route publique pour la page de login */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/message" element={<MessagingPage />} />

        </Routes>

);
}

export default AppRoutes;