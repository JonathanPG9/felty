import React from 'react';
import { Fragment } from 'react';
import { useState } from 'react'; 
import styled from 'styled-components'
import img from '../../img/registro.png'
import TextField from '@material-ui/core/TextField';
import { useForm } from "react-hook-form";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
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

.inputForm{
    margin:11px;
}
.icon{
    position:absolute;
    right:5px;
    cursor:pointer;
}
 
`

const Login = () => {
      
 
    const [display,setDisplay] = useState("password")
    const [icon,setIcon] = useState(false)
    // const [user,setUser] = useState([])
    // const [token,setToken] = useState("")
     // const [user,setUser] = useState([])  
    const change = () =>{
        setIcon(!icon) 
      icon ? setDisplay("password") :setDisplay("text") 
    }

    const { register, handleSubmit } = useForm(); 

    // const getUser = async () =>{
       
    //     const sendCookie = await fetch(`https://feltybackend-jonathan.herokuapp.com/api/auth`,{
    //      method: 'POST',
    //      credentials: "include",
    //      headers:{"Content-Type": "application/json; charset=UTF-8"},
    //      body: JSON.stringify({
    //         cookie:token
    //      })
    //     })
    //     if(sendCookie.status === 200){
    //         const actualUser = await sendCookie.json()
    //          setUser(actualUser)   
    //          console.log(user)
    //     }
 
    //  }
       
    //   useEffect(()=>{
    //     getUser()
    //   },[token,setToken]) 

    const enviarDatos = async (data,e) =>{ 
        const login = await fetch("http://localhost:5000/api/login",{
           method:"POST",
           headers:{"Content-Type": "application/json; charset=UTF-8"},
           credentials: 'include',
           body: JSON.stringify({
            name: data.nombre,
            password: data.password
           })
        }) 
          if(login.status === 200)
         {
           const info = await login.json()
            const user = await info._doc
            // const galleta = await info.token;
            // setToken(galleta)
           alert(`Bienvenido ${user.name} pronto estaremos finalizando la pagina!`)
            // //  setUser(user)
             window.location.href = "https://localhost:3000/profile"
         }
         else if(login.status === 401)
         {
             const failLogin = await login.json()
             console.log(failLogin)
             alert(`ha ocurrido un error : ${failLogin}`)

         }
         else{
             const failLogin = await login.json()
             alert(`ha ocurrido un error : ${failLogin}`)
         }
        
        e.target.reset()
    }

    let todasLasCookies = document.cookie; 
    let galleta = todasLasCookies.slice(4,100000)
     if(galleta) return window.location.href = `http://localhost:3000/profile/` 

    
 
    return ( 
        <Fragment>
        <Contenedor>
            <Form  onSubmit={handleSubmit(enviarDatos)}>
              <h3>Login</h3>
             <TextField
             className="inputForm"               
             label="Nombre"
             name="nombre"
             variant="outlined"
             inputRef={register({
                 required:{value:true}
             })}
             /> 
             <TextField
            className="inputForm"
             label="Password"
             name="password"
             variant="outlined"
             type={`${display}`}
             inputRef={register({
                required:{value:true}
            })}
            InputProps={{
                endAdornment: (
           <InputAdornment   >
             {
             icon
             ? 
             <VisibilityIcon
             className="icon" 
             onClick={() => change()}
             />              
             : 
  
            <VisibilityOffIcon
             className="icon"
             onClick={() => change()}
             /> 
            } 
          </InputAdornment>
                )
              }}
            />  
            
            <button  type="submit" >Ingresar</button>
            </Form>
        </Contenedor>   
       </Fragment>
       );
}
 
export default Login;