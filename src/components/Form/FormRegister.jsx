// ----- CREADO TODO ESTE COMPONENTE de 0

import React, {useState} from 'react'
//CREADO EL FormRegister.scss de 0
import '../../styles/FormRegister.scss';
import getDataRegister from '../../services/getDataRegister.js';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';


const FormRegister = ({ handleChangeRegister, user, handleClickValueRegister, setIsRegistered }) => {
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
      if (data === true){
        setIsRegistered(true);
        setTimeout(() => {
          navigate('/')
          confetti();
        }, "500")
      } else if (data === false){
        setError(true)
      }
    });
    // if (user.password === user.confirmPassword) {
      handleClickValueRegister({ nickname: '', email: '', password: '', confirmPassword: '' });
    // } else {
    //   handleClickValueRegister({ nickname: '', email: '', password: '', confirmPassword: '' })
    // }
  }

  return (
    
    <form action="" className="register">
      <label className="register__label" htmlFor="nickname">Nombre Completo</label>
      <input type="text" className="register__input" id='nickname' onChange={handleFormRegister} value={user.nickname} />
      <label className="register__label" htmlFor="email">Email</label>
      <input type="text" className="register__input" id='email' onChange={handleFormRegister} value={user.email} />
      <label className="register__label" htmlFor="password">Password</label>
      <input type="password" className="register__input" id="password" onChange={handleFormRegister} value={user.password} />
      <label className="register__label" htmlFor="confirmPassword">Confirmar Password</label>
      <input type="password" className="register__input" id="confirmPassword" onChange={handleFormRegister} value={user.confirmPassword} />
      <input type="file" accept='jpg / png / jpeg' />
      {error ?  <p>{'Usuario o contraseña incorrecto'}</p> : null}
      <button onClick={handleClick}>Registro</button>
      <button className="button" onClick={handleClickLogin}>¿Ya estás Registrado? Loguéate</button>
    </form>
  )
}

export default FormRegister;