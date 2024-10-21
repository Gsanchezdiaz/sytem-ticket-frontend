import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviar formulario")
    console.log(email, password)
    // try {
    //     await subscribe(email, password);
    //     navigate('/')
    // } catch (error) {
    //     console.log("Error: ", error);
    // }
  }

  return (
    <div className='w-full h-screen'>
      <img
        className='hidden sm:block absolute w-full h-full object-cover object-top'
        src='https://accounts.smartplus.com.ec/oauth/v2/images/background-sigeco.jpg' alt='///' />
      <div className='bg-black/20 fixed top-0 left-0 w-full h-screen' />

      <div className='fixed w-full px-4 py-24 z-20'>
        <div className='max-w-[450px] h-[500px] mx-auto bg-black/80 rounded-lg'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-2xl font-bold'>Te damos la bienvenida</h1>
            <form
              className='w-full flex flex-col py-4'
              onSubmit={handleSubmit}
            >
              <input
                className='p-3 my-2 bg-gray-700 rounded font-nsans-regular'
                type="email"
                placeholder='Nombre de usuario'
                autoComplete='user'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className='p-3 my-2 bg-gray-700 rounded font-nsans-regular'
                type="password"
                placeholder='Contraseña'
                autoComplete='current-password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className='bg-orange-600 py-3 my-6 rounded font-bold'>
                Iniciar sesión
              </button>
              <p className='text-sm my-4'>
                <span className='mr-2 text-gray-400'>
                  ¿Olvidaste tu contraseña?
                </span>
                <Link to="/reset-password" className='hover:underline' href='#!'>click aqui</Link>
                {/* <Link className='hover:underline' to="/login">Inicia sesión.</Link> */}
              </p>
              {/* 
              
              
              <div className='text-sm flex justify-between items-center text-gray-600'>
                <p>
                  <input
                    className='mr-2'
                    type='checkbox'
                    checked={rememberLogin}
                    onChange={(e) => setRememberLogin(!rememberLogin)}
                  />
                  Recuérdame
                </p>
                <p>
                  <a href='https://help.netflix.com/es-es/'>¿Necesitas ayuda?</a>
                </p>
              </div>
              <p className='text-sm my-4'>
                <span className='mr-2 text-gray-600'>
                  ¿Ya tienes una cuenta?
                </span>
                <Link className='hover:underline' to="/login">Inicia sesión.</Link>
              </p> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
