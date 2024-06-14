import React, { useEffect } from 'react';
import { MuroHook } from '../Hooks/MuroHook';



export const MuroPublicaciones = () => {
    const { publicaciones, getaPublicaciones } = MuroHook();

    useEffect(() => {
        getaPublicaciones();
    }, [getaPublicaciones]);

    return (
        <div className="container">
            {publicaciones.map((item) => (
                <div key={item.id_Publicaciones} className="card" style={{ width: '18rem' }}>
                    <div className="card-header">
                        {item.nombre_usuario}
                    </div>
                    {item.tipo === 'imagen' ? (
                        <img
                            src={`data:image/png;base64,${item.foto}`}
                            className="card-img-top"
                            alt="Publicación"
                        />
                    ) : (
                        <video
                            controls
                            className="card-img-top"
                            src={`data:image/png;base64,${item.foto}`}
                        >
                            Your browser does not support the video tag.
                        </video>
                    )}
                    <div className="card-body">
                        <p className="card-text">{item.descripcion}</p>
                    </div>
                    
                </div>
            ))}
        </div>
    );
};