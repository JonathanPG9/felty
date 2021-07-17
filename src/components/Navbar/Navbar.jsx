import React, { Fragment,useState,  } from 'react';
import styled from 'styled-components'
import { Link  } from "react-router-dom"; 
import {useContext} from "react";
import Mcnifica from "./Hamburguesa"
import {Wizard} from "../Context/Context"


const Header = styled.header`
position: sticky;
top: 0;
z-index: 100; 

` 
const Nav = styled.nav`
background:white;
height:7vh;  


 ul{
    list-style:none;
    display:flex;
    position:relative;
    flex-flow:row;
    justify-content:center;  
    margin-left:35px;
 }
 
li{ 
    font-family:Arial, Helvetica, sans-serif;
    margin:33px;
     cursor:pointer; 
     margin-top:20px;

}
 

.link{
    list-style:none;
    text-decoration:none;
    color:black;
    font-family:roboto;
    font-size:20px;
}
 
.acceso{
     position:absolute;
     color:red;
     right:14px; 
     list-style:none;
     text-decoration:none;
     font-family:roboto;
     font-size:19px;


 }
 li:nth-child(4){
     display: ${props => (props.user ? "none" : "flex")};
 }
 li:nth-child(5){
    position:absolute; 
    right:80px;
    display: ${props => (props.user ? "none" : "flex")};

 }
 li:nth-child(6){
    display: ${props => (props.user ? "flex" : "none")};
    position:absolute; 
    right:80px; 
 }
 li:nth-child(7){
    display: ${props => (props.user ? "flex" : "none")};
      
 }
 
 @media (max-width:1100px) and (min-width:100px){
     li{     margin-top:15px;
     }
     height:8vh;
 }


 @media   (max-width: 768px) {
    
 
    
  display:none;

 }
 


`


const Navbar = () => {
   
    const [open,setOpen] = useState(false)

    const {user,logout,scrollAbout,scrollContacto} = useContext(Wizard)
   
 
 

    const inicio = () =>{
        window.scroll({
            top: 0,
            behavior: 'smooth'
          });
          setOpen(!open)
    }
      
    const aboutFelty = () =>{
        setOpen(!open)

        setTimeout(() => {
          scrollAbout()
        }, 130);
        
    }
    const contacto = () =>{
        setOpen(!open)

        setTimeout(() => {
           scrollContacto()
        }, 130);
    }
 
    return ( 
    <Fragment> 
    <Header>
    <Nav  user={user}   >
        <ul>
            <li>
            <Link className="link" to="/" onClick={() => inicio()} >
            Inicio
            </Link>
            </li>
            <li>
            <Link className="link" to="/" 
             onClick={() => 
             aboutFelty()} >
              Felty
            </Link>
            </li>
            <li>
            <Link className="link" to="/"  onClick={() => contacto()} >
            Contacto
            </Link> 
            </li> 
            <li>
            <Link  className="acceso"  to="/register"  >
            Registro
            </Link>
            </li>
            <li>
            <Link  className="acceso" to="/login">
            Login
            </Link>
            </li>
            <li>   
             <Link  className="acceso" to="/profile"  
             >
               {
                 user ? user.name : "none" 
               }
            </Link>
            </li> 
            <li>
            <Link   to="/login" 
             onClick={() => 
                logout() 
            }            
            className="acceso" 
 
            >
            Salir
            </Link>
            </li>
          
        </ul> 
 
    </Nav>
    <Mcnifica  
    open={open}
    setOpen={setOpen}
    contacto={contacto}
    inicio={inicio}
    aboutFelty={aboutFelty}
    /> 
    </Header>
    </Fragment>
     );
} 
export default Navbar;