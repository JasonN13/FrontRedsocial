import React, { useState } from 'react';
import axios from 'axios';

export const MuroHook = () => {
    const UrlPublicaciones = "http://localhost:3000/api/Publicacion";
    const [publicaciones, setPublicaciones] = useState([]);

    const loginfo = window.localStorage.getItem('Papas')


    const getaPublicaciones = async () => {
        try {
            const result = await axios.get(UrlPublicaciones, 
            {
                headers: {
                    'Authorization': `Bear ${loginfo} `
                }
            });
            const data = result.data;
            setPublicaciones(data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const { response } = error;
                const { data } = response;
                console.log(data);
            } else {
                console.log("Error Desconocido");
            }
        }
    };

    return {
        publicaciones,
        getaPublicaciones
    };
};


