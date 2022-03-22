import { BrowserRouter, Route, Switch } from "react-router-dom"
import API from "./helpers/api"
import Home from './Home';
import {ThemeProvider, createTheme} from "@mui/material/styles"
import { CssBaseline } from "@mui/material";
import React from "react"
import Register from "./Register";
import AdminPanel from "./AdminPanel";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#ffc107",
    },
    secondary: {
      main: "#ffc107",
    }
  },
})

const signup = async (data) => {
  try {
    const res = API.signup(data)
    return res
  } catch (err) {
    console.error(err)
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/register">
              <Register signup={signup}/>
            </Route>
            <Route exact path="/admin">
              <AdminPanel/>
            </Route>
          </Switch>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
