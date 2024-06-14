import React from 'react';
import { InisioSesionfrmHook } from '../Hooks/InisioSesionfrmHook';

export const Inisio = () => {
    const { dataform, changehandler, submitHandler,Registrar } = InisioSesionfrmHook();

    return (
        <>
            <div className='container' id='Registro'>
                <form id='frm' onSubmit={submitHandler}>
                    <h1>Inicio de sesión</h1>
                    <div className="mt-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Nombre de Usuario</label>
                        <input onChange={changehandler} type="text" className="form-control" name='nombre_usuario' />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input onChange={changehandler} type="password" className="form-control" name='contrasena' />
                    </div>
                    <div className='mt-3' id='btn'>
                        <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
                    </div>
                    <div className='mt-3' id='btn'>
                        <button type="button" onClick={Registrar} className="btn btn-primary w-100">Registro</button>
                    </div>
                </form>
            </div>
        </>
    );
};
