import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Inisio } from './componentsscrem/inisio'
import FormNUsuario from './componentsscrem/FormNUsuario'
import { Errorscreen } from './componentsscrem/Errorscreen'
import { PostForm } from './componentsscrem/PostForm'
import { MuroPublicaciones } from './componentsscrem/MuroPublicaciones'

export const App = () => {

  

  const [loginfo, setloginf] = useState(window.localStorage.getItem('Papas'))

  const [islog, setislog] = useState(loginfo ? true : false);

  const CerrarSesion = () => {
    try {
      window.localStorage.removeItem('Papas');
      setislog(false)
      location.href = '/'
    } catch (error) {
      console.log(error.message)
    }

  }

  const CrearPost =()=>{
    location.href ='/Crear Publicacion'
  }



  return (

    <BrowserRouter>
      <div className='container'>
        {islog ?<button className='btn btn-primary w-50 mt-2' onClick={CerrarSesion} >Cerrar Sesion</button> : null}
        {islog ?<button className='btn btn-primary w-50 mt-2' onClick={CrearPost} >Crear Post</button> : null}
      </div>
      <Routes>
        {islog ? <Route path='/' element={<MuroPublicaciones />} /> : <Route path='/' element={<Inisio />} />}
        {islog ? <Route path='/Crear Publicacion' element={<PostForm />} /> : null}

        <Route path='/Crear Usuario' element={<FormNUsuario />} />
        <Route path='/muro' element={<MuroPublicaciones />} />

        <Route path='*' element={<Errorscreen />} />
      </Routes>
    </BrowserRouter>



  )
}





