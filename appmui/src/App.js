import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Card,
  CardContent,
} from "@mui/material";

function App() {
  return (
    <>
      {/* AppBar + Toolbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Student Registration
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Container */}
      <Container maxWidth="sm" sx={{ mt: 4 }}>

        {/* Welcome Card */}
        <Card>
          <CardContent>
            <Typography variant="h4" color="primary" gutterBottom>
              Welcome!
            </Typography>

            <Typography variant="body1">
              Register your details to create a student account.
            </Typography>
          </CardContent>
        </Card>

        {/* Registration Form */}
        <Typography
          variant="h5"
          sx={{ mt: 4, mb: 2 }}
        >
          Registration Form
        </Typography>

        {/* Name */}
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        {/* Email */}
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        {/* Password */}
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        {/* Checkbox */}
        <FormControlLabel
          control={<Checkbox />}
          label="I agree to the terms and conditions"
        />

        {/* Submit Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Register
        </Button>
      </Container>
    </>
  );
}

export default App;