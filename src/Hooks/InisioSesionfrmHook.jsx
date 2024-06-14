import React, { useState } from 'react';
import { InisioSesionHook } from '../Hooks/InisioSesionHook';

export const InisioSesionfrmHook = () => {
    const { iniciar } = InisioSesionHook();

    const [dataform, setdataform] = useState({
        nombre_usuario: "",
        contrasena: ""
    });

    const changehandler = (event) => {
        const { name, value } = event.target;
        setdataform({ ...dataform, [name]: value });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        iniciar(dataform.nombre_usuario, dataform.contrasena);
    }

    const Registrar =()=>{
        location.href ='/Crear Usuario'
      }

    return {
        dataform,
        changehandler,
        submitHandler,
        Registrar
    }
}
