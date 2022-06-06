import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const style = {

  position: 'absolute',
  textAlign:'justify',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  backgroundColor:'white',
	borderRadius: '0.5em',
	maxWidth: '600px',
	padding: '2em',
	margin: 'auto',
  display:'flex',
};

function App() {
  return (
    <div className="App">
      <Box sx={style}>
        <div style={{ width: "50%", padding:"2%",  textAlign:"center" }}>
          <Typography variant="h6" component="h2">
            <p>Vous avez Déjà un compte?</p>
          </Typography>
          <Button component={Link} to="/login" variant="contained">Login</Button>
        </div>

        <Divider orientation="vertical" variant="middle" flexItem />

        <div style={{ width: "50%", padding:"2%", textAlign:"center" }}>
          <Typography variant="h6" component="h2">
            <p>Vous n'avez pas un compte?</p>
          </Typography>
          <Button component={Link} to="/register" variant="contained">Register</Button>
        </div>
      </Box>
    </div>
  );
}

export default App;
