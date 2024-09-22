import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, TextField, Button, Typography, Select, MenuItem, InputLabel, FormControl, Box, Grid, Alert
} from '@mui/material';
import api from '../utils/api';


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !role) {
      setError('Tous les champs doivent être remplis.');
      return;
    }

    const newUser = {
      username,
      email,
      password,
      role,
    };

    try {
      // Requête vers l'API pour créer un nouvel utilisateur
      const response = await api.post('/users/signup', newUser);
      const userId = response.data.user_id;
      console.log(userId)
      
      if (role === "student"){
        const location = '';
        const profileInfo = {
          location
        }
        await api.post(`/students/${userId}/profile`, profileInfo)
      }else if(role === "teacher"){
        const bio = '';
        const location = '';
        const expertise = '';
        const profileInfo = {
          bio,
          location,
          expertise
        }
        await api.post(`/teachers/${userId}/profile`, profileInfo) 

      }else{
        console.log('Aucun des role defini')
      }

      setSuccess('Inscription réussie ! Vous pouvez maintenant vous connecter.');
      setError(''); // Réinitialiser les erreurs en cas de succès
      setTimeout(() => {
        navigate('/login'); // Redirection après 2 secondes
      }, 2000);
    
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error.response?.data || error.message);
      setError('Une erreur est survenue lors de l\'inscription.');
      setSuccess('');
    }
  };

  return (
    <Grid container sx={{ height: '100vh' }}>
      {/* Left side with form */}
      <Grid
        item
        xs={12}
        sm={6}
        md={5}
        component={Box}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="black"
      >
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'white'
            }}
          >
            <Typography component="h1" variant="h3" fontWeight="bold">
              NOTE ACADEMY
            </Typography>
            <Typography variant="h5" mt={2}>
              Create your account
            </Typography>
            <Typography color="gray" mb={3}>
              Fill in the details to create your account.
            </Typography>

            {/* Affichage des messages d'erreur et de succès */}
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
                InputLabelProps={{ style: { color: '#fff' } }}
                sx={{ input: { color: 'white' }, backgroundColor: '#333', borderRadius: 1 }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{ style: { color: '#fff' } }}
                sx={{ input: { color: 'white' }, backgroundColor: '#333', borderRadius: 1 }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputLabelProps={{ style: { color: '#fff' } }}
                sx={{ input: { color: 'white' }, backgroundColor: '#333', borderRadius: 1 }}
              />

              <FormControl fullWidth margin="normal" required>
                <InputLabel id="role-label" style={{ color: 'white' }}>
                  Role
                </InputLabel>
                <Select
                  labelId="profession-label"
                  id="role"
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  sx={{
                    color: 'white',
                    backgroundColor: '#333',
                    borderRadius: 1
                  }}
                >
                  <MenuItem value="student">Student</MenuItem>
                  <MenuItem value="teacher">Teacher</MenuItem>
                </Select>
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#7e57c2' }}
              >
                Sign Up
              </Button>

              <Typography variant="body2" color="gray" align="center">
                Already have an account?{' '}
                <a href="/login" style={{ color: '#7e57c2' }}>
                  Log In
                </a>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Grid>

      {/* Right side with images */}
      <Grid
        item
        xs={12}
        sm={6}
        component={Box}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: '#fafafa', padding: 2 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <img src="/img3.jpg" alt="image1" style={{ width: '100%', borderRadius: '8px' }} />
          </Grid>
          <Grid item xs={6}>
            <img src="/img2.jpg" alt="image2" style={{ width: '100%', borderRadius: '8px' }} />
          </Grid>
          <Grid item xs={6}>
            <img src="/img1.jpg" alt="image3" style={{ width: '100%', borderRadius: '8px' }} />
          </Grid>
          <Grid item xs={6}>
            <img src="/img4.jpg" alt="image4" style={{ width: '100%', borderRadius: '8px' }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Register;
