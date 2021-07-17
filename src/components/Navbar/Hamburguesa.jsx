import React,{Fragment} from 'react';
import styled from 'styled-components' 
import Toggle from "./Toggle"
// import {Wizard} from "../Context/Context"
const Mcnifica = styled.div`

@media (max-width: 768px){
  
  width: 1.7rem;
  height: 1.7rem;
 display:flex;
 flex-flow: column;
 justify-content:space-around;
 top:5px;
 position:fixed;
 left:5px;
 cursor:pointer;
 margin-left: ${({open}) => open ? `82px` : 0};
 transition: margin-left 1.7s;
z-index:10;

    div{
width:1.6rem;
height:0.33rem; 
border-radius: 500px; 
transform-origin:1px;
transition: 1.5s;

&:nth-child(1){
  transform: ${ ({ open }) => open ? `rotate(45deg)` : `rotate(0)` };
  background-color: ${({open}) => open ? `#9400d3`:  `#9400d3`};
}
&:nth-child(2){
    transform: ${({open}) => open ? `translateX(100%)` : `translateY(0)`};
    opacity: ${ ({open}) => open ? `0` : `1` };
    background-color: ${({nav}) => nav ? `white` : `black` }
}
&:nth-child(3){
    transform: ${ ({ open }) => open ? `rotate(-50deg)` : `rotate(0)` };
    background-color: ${({open}) => open ? `#00AAE4`: `#00AAE4`};
} 
}


}




`


const Hamburguesa = (props) => {

   let open = props.open;
   let setOpen = props.setOpen
   let inicio = props.inicio;
   let aboutFelty = props.aboutFelty;
   let contacto = props.contacto; 


    return ( 
        <Fragment>
          <Mcnifica  open={open} onClick={ () => setOpen(!open)} >
              <div/>
              <div/>
              <div/>   
          </Mcnifica>
          {
               open ? 
               <Toggle  open={open}  
                setOpen={setOpen}  
                contacto={contacto}
                inicio={inicio}
                aboutFelty={aboutFelty} 
                 /> 
                : <Toggle/>  
           }
  
 
        </Fragment>
     );
}
 
export default Hamburguesa;