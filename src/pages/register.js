import React, { useState } from 'react';
import {
  Container, TextField, Button, Typography, Select, MenuItem, InputLabel, FormControl, Box, Grid
} from '@mui/material';


const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    profession: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to register the user goes here
    console.log(formData);
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

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoFocus
                InputLabelProps={{ style: { color: '#fff' } }}
                sx={{ input: { color: 'white' }, backgroundColor: '#333', borderRadius: 1 }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
                InputLabelProps={{ style: { color: '#fff' } }}
                sx={{ input: { color: 'white' }, backgroundColor: '#333', borderRadius: 1 }}
              />

              <FormControl fullWidth margin="normal" required>
                <InputLabel id="profession-label" style={{ color: 'white' }}>
                  Profession
                </InputLabel>
                <Select
                  labelId="profession-label"
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
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
