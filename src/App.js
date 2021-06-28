import './Styles/App.css';
import { Button, ThemeProvider } from '@material-ui/core';
import { buttonTheme } from "./Styles/ThemeComponents";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NewGasto from "./Components/NuevoGasto"
import ListGasto from "./Components/RegistroGasto"
import Home from './Components/Home';
import { Fragment } from 'react';


function App() {
  return (
    <Fragment>
      <Router>
        <header>
          <p>pito</p>
          <ThemeProvider theme={buttonTheme}>
            <Link to="/nuevogasto">
              <Button variant="contained" color="primary">
                Nuevo Gasto
            </Button>
            </Link>

            <Link to="/registro">
              <Button variant="contained" color="primary">
                Registro
            </Button>
            </Link>

            <Link to="/">
              <Button variant="contained" color="primary">
                Home
            </Button>
            </Link>
          </ThemeProvider>
        </header>


        <Switch>
          <Route path="/nuevogasto">
            <NewGasto />
          </Route>

          <Route path="/registro">
            <ListGasto />
          </Route>

          <Route path="/">
            <Home />
          </Route>



        </Switch>
      </Router>

    </Fragment>
  )
}
export default App;







