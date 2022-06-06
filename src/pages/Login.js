import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import api from "../api/base";
import Cookies from "js-cookie";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { validEmail, validPassword } from '../validations/regex';

const theme = createTheme();

const Login = () => {
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const onFinish = async () => {
    await api
      .post("/user/login", {
        email: emailValue,
        password: passwordValue,
      })
      .then((res) => {
        console.log(res.data);
        Cookies.set("jwt", res.data.token);
        setErrorMessage("");
        window.location.href = "/simulator";
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.msg);
      });
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
              Login
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmailValue(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPasswordValue(e.target.value)}
              />
              {errorMessage !== "" && <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity="error">
                {errorMessage}
                </Alert>
              </Stack>}
              <Button
                disabled={emailValue.length === 0 || passwordValue.length === 0 
                    || !(validEmail.test(emailValue)) || !(validPassword.test(passwordValue))}
                onClick={onFinish}
                variant="contained"
                color="primary"
                size="large"
                fullWidth
              >
                login
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Login;
