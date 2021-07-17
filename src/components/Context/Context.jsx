import React,{useState,useEffect} from 'react';
 
export const Wizard = React.createContext()

  

const Context = (props) => {

     const [user,setUser] = useState()
     const [aboutY,setAboutY] = useState()
     const [contactoY,setContactoY] = useState()

     const getUser = async () =>{
     
         let todasLasCookies = document.cookie; 
         let galleta = todasLasCookies.slice(4,100000)
         if(galleta)
         {
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
                    console.log("null user")
                }
         }
           
     }

     useEffect(() =>{ 
    getUser()
     },[])

     const logout =  async () =>{ 
    const salir = await fetch(`http://localhost:5000/api/logout`,{
        method: "GET", 
        credentials: 'include', //  cookies 
    })  
     const salio = await salir.json()
     console.log(salio)
    if(salio) return window.location.href = "http://localhost:3000/login"

     }       

     
      const scrollAbout = () => aboutY.current.scrollIntoView();
      const scrollContacto = () => contactoY.current.scrollIntoView();

 
    return ( 
        <Wizard.Provider value={{user,logout,scrollAbout,scrollContacto,setAboutY,setContactoY}}>
            {props.children}
        </Wizard.Provider>
         
     );
}
 
export default Context;