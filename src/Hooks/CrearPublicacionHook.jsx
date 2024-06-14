import React, { useState } from 'react'
import axios from 'axios'

export const CrearPublicacionHook = (endPoint) => {

    const [dataform, setdataform] = useState({



    })

    const [Token, setToken] = useState(window.localStorage.getItem('Papas'))


    const changeHandler = (event) => {
        const { name, value } = event.target;

        setdataform({ ...dataform, [name]: value });
    }

    const changehandlerimg = async (event) => {

        const imagen = event.target.files[0];
        setdataform({ ...dataform, imagen: imagen })

    }

    const submithandlerimagen = async (event) => {
        event.preventDefault();

        const formdata = new FormData();

        const Keys = Object.keys(dataform);

        Keys.map(item => {

            formdata.append(item, dataform[item])

        })
        try {
            const result = await axios.post(endPoint, formdata,
                {
                    headers: {
                        'Authorization': `Bear ${Token} `
                    }
                })
            const data = (await result).data;
            location.href='/Muro'
            console.log(data);
            

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

    return {
        submithandlerimagen,
        changehandlerimg,
        changeHandler
    }
}


