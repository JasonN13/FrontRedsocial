import { CrearPublicacionHook } from '../Hooks/CrearPublicacionHook'
import React from 'react'

export const PostForm = () => {

     const {changehandlerimg,submithandlerimagen,changeHandler} = CrearPublicacionHook ("http://localhost:3000/api/Publicacion")

  return (
    <div className='container'>
    <h1 className='mt-5'>Creacion de Publicacion</h1>
    <form id='frm' onSubmit={submithandlerimagen}>
        
        <div className="mt-3">
            <label htmlFor="contrasena" className="form-label">Descripcion</label>
            <input type="text" className="form-control" name='descripcion' onChange={changeHandler} />
        </div>
        <div className="mt-3">
                    <label htmlFor="tipo" className="form-label">Tipo de Archivo</label>
                    <select className="form-control" name='tipo' onChange={changeHandler}>
                        <option value="imagen">Imagen</option>
                        <option value="video">Video</option>
                    </select>
                </div>
        <div className="mt-3">
            <label htmlFor="foto_perfil" className="form-label">Subir imagen</label>
            <input type="file" className="form-control" name='imagen' onChange={changehandlerimg} />
        </div>
        <div className='mt-3' id='btn'>
            <button type="submit" className="btn btn-primary w-100">Publicar</button>
        </div>
    </form>
</div>
  )
}
