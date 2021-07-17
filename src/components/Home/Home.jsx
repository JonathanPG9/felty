import React, { Fragment } from 'react';
import styled from 'styled-components' 
import img3 from "../../img/img3.jpg"
import { Button } from '@material-ui/core';
import {Wizard} from "../Context/Context"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import img from "../../img/imgHome.png"
 const  Contenedor =  styled.div`
  
  background: white;
  /* background-image: url(${img3});  */
  background-size: cover;
  background-position:center;
  width:  100%;
  height:75vh;
  display:flex;
  justify-content:center;
  flex-flow:row;

 div{  
      justify-content:center;
      align-items:center;
      display:flex;  
      flex-flow:column;

  &:nth-child(1){
      font-family:roboto; 
     margin-top:180px; 
     width:70%; 
     height:16vh;
  &:nth-child(1) p{
            margin-top:-15px; 
            color: black;
            text-align:center;
       }  
} 
p{
     font-size:16.5px;
     width:70%
} 
.icon{
     margin-left:10px;
}
.botones{
     margin:10px;
     display:flex;
     
     flex-flow:column;
}
Button{
     margin:10px;
     text-transform:initial;
     font-size:16px
}
}
.imgHome{
 
}
@media (max-width: 1158px){
        h1{
      text-align:center;
 }
      div{
          margin-left:150px
     }
     .imgHome{
     width:80%;
     height:80%;  
   
}
height:80vh;
}
@media (max-width: 920px){
     div{
          margin-left:-30px
     }

   h1{
      text-align:center;
 }
 
 .imgHome{
 width:60%;
 height:70%;   
}

}

@media (max-width: 650px){
 background-image: url(${img3}); 

div{
     margin-left:0px;
}

.imgHome{
     display:none
}
 
 
 

}

 
  
 
@media (max-width: 381px){

 height:85vh; 
 
.botones {  
   width:240px; 
    
} 
}


 `


const Home = (props) => { 
     const {user,scrollAbout} = React.useContext(Wizard)
   
     // const aboutFelty = () =>{ 
     //      setTimeout(() => {
     //          window.scroll({
     //              top: 840,
     //              behavior: 'smooth'
     //            });
     //      }, 130);
 
     //  }
//     console.log(offsetTop)
   
     return ( 
        <Fragment>
             <Contenedor  >
                  <div  >
                  <h1>¡Bienvenido {user ? user.name : null } a Felty!</h1> 
                  <p>Felty te permite   poder transformar tus notas. 
                       <br/>
                 ¿Queres tener una forma de digitalizar tus notas y llevarlo siempre contigo? <br/>
                  <strong>Felty es la solucion.</strong> </p> 
                   <div className="botones">
                   <Button variant="contained" color="primary" 
                   onClick={() => document.location.href = "http://localhost:3000/register"}
                   > 
                   <span>Registrate</span> 
                   <AccountCircleIcon  className="icon" />
                   </Button>
                   
                   <Button variant="contained" color="primary"
                   onClick={() => scrollAbout()}
                   > 
                   <span>Conocenos</span>  
                   <ArrowDownwardIcon   className="icon"  />
                   </Button>
                   
                    </div> 

                  </div>
                  <img src={img}  alt="w"  className="imgHome"/>
 
             </Contenedor> 
        </Fragment>
     );
}
 
export default Home;