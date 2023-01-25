// ----- CREADO TODO ESTE COMPONENTE de 0

import React, { useState } from 'react'
//CREADO EL FormRegister.scss de 0
import '../../styles/Form/FormRegister.scss';
import getDataRegister from '../../services/getDataRegister.js';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';



const FormRegister = ({ handleChangeRegister, handleClickValueRegister, setIsRegistered, user }) => {

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate('/login')
  }
  const handleFormRegister = (event) => {
    handleChangeRegister({ ...user, [event.target.id]: event.target.value })
  }
  const handleClick = (event) => {
    event.preventDefault();
    getDataRegister(user).then((data) => {
      if (data === true ) {
        setIsRegistered(true);
        setTimeout(() => {
          navigate('/');
          confetti();
        }, "500")
      } else if (data === 'Email incorrecto') {
        setError('Email con formato no valido')
      } else if (data === 'Edad requerida'){
        setError('La edad es requerida')
      } else if (data === 'Email y edad incorrecto'){
        setError('Email y edad incorrectos')
      }
    });
    handleClickValueRegister({ nickname: '', email: '', password: '', age: '' });
  }

  return (
    <form action="" className="register" method='post'>
      <p className='registerText'>REGISTRATE</p>
      <label className="register__label" htmlFor="nickname"></label>
      <input type="text" className="register__input" id='nickname' onChange={handleFormRegister} value={user.nickname} placeholder='Nickname' />
      <label className="register__label" htmlFor="age"></label>
      <input type="text" className="register__input" id='age' onChange={handleFormRegister} value={user.age} placeholder='Edad' required />
      <label className="register__label" htmlFor="email"></label>
      <input type="text" className="register__input" id='email' onChange={handleFormRegister} value={user.email} placeholder='Email' />
      <label className="register__label" htmlFor="password"></label>
      <input type="password" className="register__input" id="password" onChange={handleFormRegister} value={user.password} placeholder='Contraseña' />
      {error ? <p className='register__error'>{error}</p> : null}
      <button type='submit' className='register__button' onClick={handleClick}>Registrar</button>
      <p className='register__areRegister'> ¿YA ESTÁS REGISTRADO?
        <button type='button' className="register__button_login" onClick={handleClickLogin}>LOGUÉATE</button>
      </p>
    </form>
  )
}

export default FormRegister;