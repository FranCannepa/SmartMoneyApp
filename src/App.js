import './Styles/App.css';
import {Button, ThemeProvider} from '@material-ui/core';
import {buttonTheme} from "./Styles/ThemeComponents";
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link
} from "react-router-dom";

import NewGasto from "./Components/NuevoGasto"
import ListGasto from "./Components/RegistroGasto"
import { Fragment } from 'react';


function App() {
  return (
    <Fragment>
      <Router>
       <header>
          <ThemeProvider theme={buttonTheme}>
          <Link to="/NuevoGasto">
            <Button variant="contained" color="primary">
              Nuevo Gasto
            </Button>
          </Link>
          
          <Link to="/Registro">
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
       <Route path="/NuevoGasto">
         <NewGasto />
       </Route>
       
       <Route path="/Registro">
         <ListGasto />
       </Route>

       <Route path="/">
         {/* <Home /> */}
       </Route>


       
     </Switch>
     </Router>
      
    </Fragment>
  )
}
export default App;







