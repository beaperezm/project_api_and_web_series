// ----- CREADO TODO ESTE COMPONENTE de 0

import React, { useState } from 'react'
//CREADO EL FormRegister.scss de 0
import '../../styles/FormRegister.scss';
import getDataRegister from '../../services/getDataRegister.js';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';



const FormRegister = ({ handleChangeRegister, handleClickValueRegister, setIsRegistered, user }) => {

  const [error, setError] = useState(false);
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
      if (data === true) {
        setIsRegistered(true);
        setTimeout(() => {
          navigate('/login');
          confetti();
        }, "500")
      } else if (data === false) {
        setError(true)
      }
    });
    handleClickValueRegister({ nickname: '', email: '', password: '', confirmPassword: '' });
  }

  return (

    <form action="" className="register">
      <p className='registerText'>REGISTRATE</p>
      <label className="register__label" htmlFor="nickname"></label>
      <input type="text" className="register__input" id='nickname' onChange={handleFormRegister} value={user.nickname} placeholder='Nickname' />
      <label className="register__label" htmlFor="email"></label>
      <input type="text" className="register__input" id='email' onChange={handleFormRegister} value={user.email} placeholder='Email'/>
      <label className="register__label" htmlFor="password"></label>
      <input type="password" className="register__input" id="password" onChange={handleFormRegister} value={user.password} placeholder='Contraseña' />
      <label className="register__label" htmlFor="confirmPassword"></label>
      <input type="password" className="register__input" id="confirmPassword" onChange={handleFormRegister} value={user.confirmPassword} placeholder='Confirmar Contraseña'/>
      {error ? <p className='register__error'>{'Usuario o contraseña incorrecto'}</p> : null}
      <button className='register__button' onClick={handleClick}>Registrar</button>
      <p className='register__areRegister'> ¿Ya estás Registrado?   
        <button className="register__button_login" onClick={handleClickLogin}>Loguéate</button>
      </p>

    </form>
  )
}

export default FormRegister;