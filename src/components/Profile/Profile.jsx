import React, { useEffect } from 'react';
import { Fragment,useState } from 'react';
import styled from 'styled-components'

const Perfil = styled.div`

height:89vh;
width:100%; 
display:flex;
justify-content:center;


.inicio{
  display:flex; 
  align-items:center;
  flex-flow:column;
}

`
const NotAuth = styled.div`
width:100%;
height:89vh; 

`


const Profile = () => {
 
  const [user,setUser] = useState([])

      let todasLasCookies = document.cookie; 
      let galleta = todasLasCookies.slice(4,100000)
    
 
       
      useEffect(()=>{
            const getUser = async () =>{
       
        const sendCookie = await fetch(`http://localhost:5000/api/auth`,{
         method: 'POST',
         credentials: "include",
         headers:{"Content-Type": "application/json; charset=UTF-8"},
         body: JSON.stringify({
            cookie:galleta
         })
        })
        if(sendCookie.status === 200){
            const actualUser = await sendCookie.json()
             setUser(actualUser)   
        }
        else{
          return window.location.href = "http://localhost:3000/login"

        }
     }

     getUser()
      },[user,galleta])
      console.log(user)

      if(!galleta) return document.location.href = "http://localhost:3000/login"

    return ( 
        <Fragment>
            {
              galleta
              ?
             <Perfil> 
               <div className="inicio">
               <h1> {   user.sex === "hombre" ? `Bienvenido  ${user.name}`: `Bienvenida ${user.name}`  }</h1> 
               <h2> Proximamente...  </h2>
               </div>
               
                 
             </Perfil>
             :
          <NotAuth>
              <h1>Acceso denegado </h1>
          </NotAuth>
            }
 
        </Fragment>
     );
}
 
export default Profile;