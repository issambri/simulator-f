import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const Simulator = () => {
  const [montant, setMontant] = React.useState(0);
  const [taux, setTaux] = React.useState(0);
  const [numMois, setNumMois] = React.useState("");
  const [echeance, setEcheance] = React.useState("");

  const onFinish = async () => {
    let echance = 0;
    echance = (montant * (1+(taux/100)))/numMois;
    setEcheance(echance);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="montant"
                label="Montant"
                name="montant"
                type="number"
                onChange={(e) => setMontant(e.target.value)}
                helperText="Le montant ne doit pas dépassé 300 000DT"
                InputProps={{ inputMode: 'numeric', pattern: '[0-9]*', inputProps: { min: 0, max: 300000 } }}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="taux"
                label="Taux"
                name="taux"
                type="number"
                onChange={(e) => setTaux(e.target.value)}
                helperText="Le taux ne doit pas dépassé 12%"
                InputProps={{ inputMode: 'numeric', pattern: '[0-9]*', inputProps: { min: 0, max: 12 } }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="numMois"
                label="Durée"
                name="numMois"
                type="number"
                onChange={(e) => setNumMois(e.target.value)}
                helperText="La durée ne doit pas dépassé 300 mois"
                InputProps={{ inputMode: 'numeric', pattern: '[0-9]*', inputProps: { min: 0, max: 300 } }}
              />
              <Button
                disabled={
                  montant.length === 0 || montant.length > 300000 ||
                  taux.length === 0 || taux.length > 12 ||
                  numMois.length === 0  || numMois.length > 300
                }
                onClick={onFinish}
                variant="contained"
                color="primary"
                size="large"
                fullWidth
              >
                Calculer
              </Button>
              <TextField
                margin="normal"
                required
                fullWidth
                id="echeance"
                label="Echéance (DT/Mois)"
                name="echeance"
                value={echeance}
                disabled
                variant="filled"
              />
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Simulator;
