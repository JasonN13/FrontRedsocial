import React, { useState } from 'react'
import axios from 'axios'

export const CrearUsuarioHook = (endPoint) => {

    const [dataform, setdataform] = useState({



    })

    const changeHandler = (event) => {
        const { name, value } = event.target;

        setdataform({ ...dataform, [name]: value });
    }


    const submithandler = async (event) => {
        event.preventDefault();




        try {
            const result = await axios.post(endPoint, dataform);
            const data = (await result.data);
            console.log(data)

            
             location.href ='/'
              

        } catch (error) {
            if (axios.isAxiosError(error)) {
                const { response } = error
                const { data } = response
                console.log(data)
            } else {
                console.log("Error Desconocido")
            }
        }

        


    }

    const Logo =()=>{
        location.href ='/'
      }

    return {
        dataform,
        changeHandler,
        submithandler,
        Logo
    }
}


