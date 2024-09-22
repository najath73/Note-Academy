import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Grid } from '@mui/material';
import { useAuth } from '../hooks/authContext'; 
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',  
    password: ''
  });
  const [error, setError] = useState(null); 
  const { login } = useAuth(); 
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData)
      await login(formData.email, formData.password); 
      navigate('/');
    } catch (err) {
      setError(err.message); 
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
              Login
            </Typography>
            <Typography color="gray" mb={3}>
              Fill in the details to Log in to your account.
            </Typography>

            {/* Afficher l'erreur si elle existe */}
            {error && <Typography color="red">{error}</Typography>}

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
                InputLabelProps={{ style: { color: '#fff' } }}
                sx={{ input: { color: 'white' }, backgroundColor: '#333', borderRadius: 1 }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#7e57c2' }}
              >
                Sign In
              </Button>

              <Typography variant="body2" color="gray" align="center">
                Don't have an account?{' '}
                <a href="/register" style={{ color: '#7e57c2' }}>
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

export default Login;
