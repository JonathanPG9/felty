import React,{useRef,Fragment,useEffect} from 'react'; 
import styled from 'styled-components'
import img4 from "../../img/imgContacto.png"
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel'; 
// import { makeStyles } from '@material-ui/core/styles'; 
// import clsx from 'clsx';
// import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { useForm } from "react-hook-form";
import {Wizard} from "../Context/Context"


const Contenedor  = styled.div`
background: rgb(254,254,254);
  background-image: url(${img4}); 
  background-size: cover;
  background-position:center;
  width:  100%;
  height:95vh;
  display:flex;
  justify-content:center;
  flex-flow:column;
align-items:center;


p{
    text-align:center;
}

@media (max-width:1200px){
  height:auto;
}


`
const Form = styled.form`
display:flex;
flex-flow:column;

.textForm{
  width:300px;
  max-width:300px; 
}

button{
    margin:10px;
    background:transparent;
    border:none;
    border-radius:10px;
  outline:none;
  cursor:pointer;
  font-size:15px;
  width:10%;
 
}

.inputForm{
  margin:10px;
  
}
span{
  font-size:13px;
  color:red;
  margin-left:10px; 
  font-family:roboto;
}
 
`
 


const Contacto = () => {
  const {setContactoY} = React.useContext(Wizard)
  const { register, handleSubmit, errors } = useForm();

  const submit = (data,e) =>{
  console.log(data)
   fetch("https://backendjonathan-portafolio.herokuapp.com/api/form", {
    method: "POST", 
    body:JSON.stringify({
     nombre: data.nombre,
     asunto : data.asunto,
     mail: data.email,
     texto: data.mensaje 
    }),
    headers:{
        "Content-Type": "application/json; charset=UTF-8"
    } 
   })   
   .then( () =>  alert("¡Gracias!, tu comentario fue enviado exitosamente")  )
   .catch( () => {
     alert("Uhm ha ocurrido un error quizas el servidor se cayo t.t");
   });
   e.target.reset()

  }
      
     const refContacto = useRef();
    
     useEffect(() =>{
      setContactoY(refContacto)
     },[refContacto,setContactoY])
     
    return ( 
        <Fragment>
             <Contenedor  ref={refContacto}   >
              <h1>
                  Contactanos
              </h1>
              <p   >
                  ¿Te quedaste con alguna duda?  <br/> Envianos tu comentario
              </p>
              <Form onSubmit={handleSubmit(submit)}    > 
              <TextField
               className="inputForm"
               type="text" 
               name="nombre" 
               inputRef={register({
                required:{value:true,message:"Nombre Requerido"},
                minLength: { value: 2, message: "Ingrese un Nombre mas largo por favor.." } ,
                maxLength:{value:30, message:"Por favor ingrese un Nombre mas corto"},
                pattern: {
                   value:  /^[ñA-Za-z\s]+$/g
                   , message: "Por favor no ingrese  numeros ni caracteres especiales"
                 }
              })}
               label="Nombre"
               />
                <span>{errors?.nombre?.message}</span>
                     
              <TextField className="inputForm"
                 name="email" 
                   type="email" 
                    autoComplete="email" 
                    inputRef={register({
                      required:{value:true,message:"Correo Electronico requerido"},
                      pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email incorrecto por favor ingrese uno valido"}
                  })}
                    label="Correo Electronico"
                   />
               <span>{errors?.email?.message}</span>

              <TextField 
               className="inputForm"
                type="text"
                name="asunto"   
                inputRef={register({
                  required:{value: true, message:"Asunto Requerido"}, 
                  pattern: {
                    value: /^[ñA-Za-z_]*[ñA-Za-z][ñA-Za-z_]*$/i
                    , message: "Por favor no ingrese espacios,numeros ni caracteres especiales"
                  },
                  maxLength:{value:20 , message: "Por favor ingrese un asunto mas corto"},
                  minLength:{value:2,message:"Por favor ingrese un asunto mas largo"}
               })}
                label="Asunto"  />
                <span>{errors?.asunto?.message}</span>
              <br/>
              <TextField 
               className="textForm"
               type="text" 
               label="Mensaje"
               multiline
               rows={10} 
               variant="outlined"
               inputRef={register({ required:{value:true, message:"Mensaje Requerido"},
                      maxLength:{value:140, message:"Mensaje demasiado largo"},
                    minLength:{ value:5 , message:"Mensaje demasiado corto!"}     })}
               name="mensaje" 
              />
              <span>{errors?.mensaje?.message}</span>
              <button type="submit" >Enviar</button>
              </Form>
              </Contenedor>
        </Fragment>
     );
}
 
export default Contacto;