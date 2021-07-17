import React,{ Fragment,useRef,useEffect} from 'react';
import styled from 'styled-components'
import notasUno from "../../img/notas1.png"
import notasDos from "../../img/notas2.png"
import notasTres from "../../img/notas3.png"
import security from "../../img/security.png" 
import { Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Wizard} from "../Context/Context"
// import {Wizard}  from "../Context/Context"
const Contenedor = styled.div`
display:flex;
justify-content:center;
height:155vh;
background: rgb(248,247,248); 
flex-flow:column; 
align-items:center;

div{
   display:flex;
   margin-top:3px;
   flex-flow:column;
   width:30% ;
   align-items:center;
   height:41%; 
   text-align:center;
   font-family:roboto; 
  
}
p{
    font-family:roboto;
}
.seguridad{
    height:380px;
}
.opciones{
      width:100%;    
     height:300px;
}
 .opciones p{
     margin:10px;
 }
 .opciones h4{
     margin:10px;
 }
 

.img-uno{ 
    width:400px;  
    margin-top:-30px;
    margin-bottom:50px;
}
.img-dos{ 
    width:430px; 
    align-self:flex-end;
    position:absolute;
}
.img-tres{
    width:136px;  
    align-self:flex-start;
    position:absolute;
}
 
 .img-cuatro{
      width:424px;
      
 }
 .icon{
     margin-left:10px;
}
 
@media (max-width: 1222px){
 .img-dos{
     margin-top:-15px;
 }
 height:auto; 

 
}
@media (max-width: 1145px){
div:nth-child(1){
    width:66%
}
.img-dos{
display:none;
 }

 .seguridad p{
     width:300px;
 }
  
}
@media (max-width:950px){
    .seguridad{
        height:440px;
    }
}
@media (max-width: 666px){
 .img-tres{
     display:none
 }
    
     .seguridad{
        height:460px;
    }
    
}
@media (max-width: 473px){
    div:nth-child(1){
    width:90%
   }
   div:nth-child(2){
    width:90%
   } 
   .img-cuatro{
    width:350px
    }
    .img-uno{
    width:350px
    }
         .seguridad{
        height:340px;
    }
    
 .seguridad p{
     width:88%;
 }
}


@media (max-width: 375px){
    div:nth-child(1){
    width:86%
   }
   div:nth-child(2){
    width:86%
   } 
   .img-cuatro{
    width:300px
    }
    .img-uno{
    width:300px
    }

    .opciones{ 
        width:90%;
        height:313px;
    }
}
`


const About = () => {
     const {setAboutY} = React.useContext(Wizard)

    const refAbout = useRef();
   
 
 
   useEffect(() =>{
     setAboutY(refAbout)
   },[refAbout,setAboutY])
    return ( 
        <Fragment>

            <Contenedor  ref={refAbout} > 
          

          
                 <div>
                 <h1>¿Que es Felty?</h1> 
                    <p>Felty no es una app que te permita guiar un proyecto de un equipo de trabajo, Felty es <b> tu</b> app personal de trabajo o actividades personales que quieras hacer  durante el dia, cosas simples cotidianas que anotas en una libreta o un post it, lo vas a poder llevar a cualquier lugar con Felty.
                     </p> 
                     <img src={`${notasUno}`} alt="" className="img-uno"/> 
                </div> 
                     
                <div className="seguridad">
                          <p>
                          Felty <b>asegura</b> tus datos , tu informacion a la hora de registrarte se almacena en nuestra base de datos de manera <b>encriptada</b> para que <b>nadie pueda vulnerar tus datos.</b>  
                          </p>
                         <img src={`${security}`} alt=""   className="img-cuatro"/>
                       </div>
                       <div className="opciones">
                         
                         <h4>¿Necesitas anotar que tenes que sacar a paser al perro hoy?</h4> 
                         <h4>o quizas..</h4>
                       <h4>¿Necesitas anotarte la fecha de entrega un trabajo de la facultad? </h4>
                       
                       <p>
                       Felty es la <b> solucion </b> para crear tus notas una manera  <b>simple y sencilla</b> 
                       </p>
                       <p>
                       ¡Es hora de <b>mejorar</b> tu  <b>proactividad</b>  ! 
                       </p>
                       <Button variant="contained" color="primary"
                       onClick={() => document.location.href = "https://feltymvp.web.app/register"}
                       > 
                      <span>Registrate</span> 
                     <AccountCircleIcon  className="icon" />
                     </Button>
                       
                     <img src={`${notasDos}`} alt="" className="img-dos"/>
                     <img src={`${notasTres}`} alt="" className="img-tres"/>  
                     </div>   
            </Contenedor>
           
        </Fragment>
     );
}
 
export default About;