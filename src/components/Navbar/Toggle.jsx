import React,{ Fragment} from 'react';
import styled from "styled-components"
import { Link  } from "react-router-dom";
import {Wizard} from "../Context/Context"
 const UL = styled.ul`  
 
 li{
     display:none;
 }
 
@media screen and (max-width:768px) {
     
 width:  ${({ open   }) => open ? `180px` : `0px` }; 
background-color:black;
display:flex;
height:105vh; 
flex-flow:column; 
color:white;
font-family:roboto;
font-size:19px;
list-style:none;
position:sticky;
position:fixed;
z-index:2;  
top:-20px;
transition: all 1s;  

 
li{
    display:flex;
    padding-top:85px;
   padding-left:35px;
 }
 
 .link{
    list-style:none;
    text-decoration:none;
    color:white;
    font-family:roboto;
    font-size:20px;
    cursor:pointer;

}
.acceso{
     color:#00AAE4;
     right:14px; 
     list-style:none;
     text-decoration:none; 


 }

 li:nth-child(4){ 
    display: ${props => (props.user ? "none" : "flex")}; 
 }
 li:nth-child(5){ 
    display: ${props => (props.user ? "none" : "flex")}; 
 }
}
 @media   (max-width:550px){
     
 overflow-y: scroll; 
 }
`



const Toggle = (props) => {
    const {user,logout} = React.useContext(Wizard)
    let open = props.open
    let setOpen = props.setOpen  
    let inicio = props.inicio;
    let aboutFelty = props.aboutFelty;
    let contacto = props.contacto;
 
 return ( 

<Fragment>
 {
     props.open ? 
     <UL   open={open} user={user}  >
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
            <Link  className="acceso"  to="/register"  onClick={() => setOpen(!open)} >
            Registro
            </Link>
            </li>
            <li>
            <Link  className="acceso" to="/login" onClick={() => setOpen(!open)} >
            Login
            </Link>
            </li>
            <li>   
             <Link  className="acceso" to="/profile"  
              onClick={() => setOpen(!open)}  
             >
               {
                user ?  user.name : null 
               }
            </Link>
            </li> 
             {
                 user ?
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
            :
            null
             }
          

 </UL>
 :
 <UL   
 style={{opacity:0}}
 />
 }
        </Fragment>
     );
}
 
export default Toggle;