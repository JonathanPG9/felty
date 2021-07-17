import React  from 'react';
import  Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Contacto from "./components/Contacto/Contacto"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Profile from "./components/Profile/Profile" 
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import Context from "./components/Context/Context" 
 

function App() {
 
 
  return ( 
    <Context>  
     <Router> 
    <Navbar/>  
       <Switch>
         <Route exact path="/">
         <Home   />  
         <About   /> 
         <Contacto    /> 
         </Route>
         <Route exact path="/login" component={Login} /> 
         <Route  exact path="/register">  
         <Register/>
         </Route>
         <Route exact path="/profile" >
         <Profile/>
         </Route>
       </Switch>
     </Router>
     </Context> 
  );
}

export default App;
