import './Styles/App.css';
import {Button, ThemeProvider} from '@material-ui/core';
import {buttonTheme} from "./Styles/ThemeComponents";
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link
} from "react-router-dom";
import {NewGasto, Home, Registro} from './Components/MainComponents.js'


function App() {
  return (
    
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
         <Registro />
       </Route>

       <Route path="/">
         <Home />
       </Route>


       
     </Switch>
     </Router>
      
    
    
      
  );
}

export default App;




{/* <Button variant="contained" color="primary">
              Nuevo Gasto
              <Link to="/NuevoGasto" />
          </Button>
       
          <Button variant="contained" color="primary">
              REGISTRO
              <Link to="/Registro"/>
          </Button>
        
          <Button variant="contained" color="primary">
            HOME
         <Link to="/"/>
        </Button> */}