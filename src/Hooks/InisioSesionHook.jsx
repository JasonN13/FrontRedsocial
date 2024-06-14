import React, { useState } from 'react';
import axios from 'axios';


const UrlSesion = "http://localhost:3000/api/usuario/auth";

export const InisioSesionHook = () => {

  

  const [inisiosesion, setinisiosesion] = useState(false);

  const [datauser, setdatauser] = useState({
    nombre_usuario: "",
    nombre: "",
    email: ""
  });


  const setlocastorage =(Value)=>{
try {
  window.localStorage.setItem('Papas',Value)
  location.reload();
} catch (error) {

  console.log(error.mensage)
}
   

  };

  const iniciar = async (nombre_usuario, contrasena) => {
    const dataSesion = {
      nombre_usuario,
      contrasena
    };

    try {
      const resul = await axios.post(UrlSesion, dataSesion);
      const dataresult = (await resul).data;

    //console.log(dataresult)
    setlocastorage(dataresult.info_user)
    
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response } = error;
        const { dataresult } = response;
        console.log(dataresult);
    } else {
        console.log("Error Desconocido");
    }
    }
  }

  return {
    inisiosesion,
    iniciar
  }
}
