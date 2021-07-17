import React from 'react'; 
import { useState } from 'react';
import styled from 'styled-components'
import img from '../../img/registro.png'
import TextField from '@material-ui/core/TextField';
import { useForm } from "react-hook-form";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';



const Contenedor = styled.div`
display:flex;
height:89.4vh;
justify-content:center;
background-image:url(${img});
background-repeat:no-repeat;
background-position:center; 
`
const Form = styled.form`
display:flex;
justify-content:center;
align-items:center;
flex-flow:column; 
margin-top:-80px;

.inputForm{
    margin:11px;
}
.iconPass{
    position:absolute;
    right:5px;
    cursor:pointer;
}
`
 

const Register = () => {
    
    const [display,setDisplay] = useState("password")
    const [icon,setIcon] = useState(false)
    const [actualSex,setActualSex] = useState("undefined")
    const change = () =>{
        setIcon(!icon) 
      icon ? setDisplay("password") :setDisplay("text") 
    }
    let todasLasCookies = document.cookie; 
    let galleta = todasLasCookies.slice(4,100000)

  
    const { register, handleSubmit, errors } = useForm();
    
    const sex =
        [
        {value:"hombre",label:"Hombre"},
        {value:"mujer",label:"Mujer"},
        {value:"undefined",label:"Indefinido"}
        ]
    
 
 

    const enviarRegistro = async (data,e) =>{
          
         const register = await fetch(`http://localhost:5000/api/register`,{
         method:"POST",
         headers:{"Content-Type": "application/json; charset=UTF-8"},
         body: JSON.stringify({
          name: data.nombre,
          email: data.email,
          password: data.password,
          sex: actualSex
         }) 
         })
         if(register.status === 200){
 
            const registroCompleto = await register.json();
            console.log(registroCompleto)
             window.location.href =   `https://feltymvp.firebaseapp.com/login` 
       
          }
          else if(register.status === 401){
              const failRegister401 = await register.json();
              console.log(failRegister401)
          }
           else{
               const registerFail = await register.json()
               alert(`Ocurrio un error ${registerFail}`)
           }
         
        e.target.reset()
    }

 
    const handleChange = (e) => {
        setActualSex(e.target.value);
     };

     if(galleta) return window.location.href = `https://feltymvp.web.app/login`
    
     return ( 
          <Contenedor>
              <Form onSubmit={handleSubmit(enviarRegistro)}>
                <h3>Registro</h3>
               <TextField
               className="inputForm"               
               label="Nombre *"
               name="nombre"
               variant="outlined"
               inputRef={register({
                  required:{value:true, message:"Nombre requerido"},
                  maxLength:{value:25, message:"Elija un nombre mas corto"},
                  minLength:{value:2, message:"Elija un nombre mas extenso"} 
               })}
               />
               <span>{errors?.nombre?.message}</span>
               
                <TextField
               className="inputForm"
               label="Correo Electronico *"
               name="email" 
               variant="outlined"
               inputRef={register({
                   required:{value:true, message:"Correo electronico requerido"},
                   minlength:{value:5, message:"Ingrese un correo valido"},
                   maxLength:{value:100, message:"Ingrese un correo valido"},
                   pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                   message: "Email incorrecto por favor ingrese uno valido"}
               })}
               />
               <span>{errors?.email?.message}</span>

               <TextField
               className="inputForm"
               label="Password *"
               name="password"
               variant="outlined"
               type={display}
               autoComplete="on"
               inputRef={register({
                required:{value:true, message:"Contraseña Requerida"},
                maxLength:{value:100, message:"Contraseña demasiado extensa"},
                minLength:{value:5, message:"Ingrese una contraseña mas extensa"} 
               })}
               InputProps={{
                endAdornment: (
                  <InputAdornment  >
                      
                               {
             icon
             ?
              <VisibilityIcon
             onClick={() => change()}
             className="iconPass"
             />  
             :  
             <VisibilityOffIcon
             onClick={() => change()}
             className="iconPass"
             /> 
            } 
                  </InputAdornment>
                ),
              }}
              />  
              <span>{errors?.password?.message}</span>
 
            <TextField
            value={actualSex} 
            select
            onChange={handleChange} 
            helperText="Por favor selecione su sexo"
            label="Sexo"
            required
            >
             {sex.map((option) => (
               <MenuItem  
               key={option.value} value={option.value}>
              {option.label}
               </MenuItem>
             ))}
            </TextField> 
            <span>{errors?.sexo?.message}</span>
            <br/>

            <button type="submit"   >Crear cuenta</button>

              </Form>
          </Contenedor>    
         );
}
 
export default Register;