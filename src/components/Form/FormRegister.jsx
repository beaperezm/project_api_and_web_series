// ----- CREADO TODO ESTE COMPONENTE de 0

import React from 'react'

//CREADO EL FormRegister.scss de 0
import '../../styles/FormRegister.scss';
import getDataRegister from '../../services/getDataRegister.js';
import { useNavigate } from 'react-router-dom';

const FormRegister = ({ handleChangeRegister, user, handleClickValueRegister }) => {
    const navigate = useNavigate();
    const handleClickLogin = () =>{
      navigate('/login')
    }
    const handleFormRegister = (event) => {
        handleChangeRegister({...user, [event.target.id]: event.target.value})
      
    }
    const handleClick = (event) => {
      event.preventDefault();
      if (user.password === user.confirmPassword) {
          // CAMBIADO EL SEGUNDO PARÁMETRO A newUser en lugar de user
          getDataRegister(user)
          // axios.post('https://proyecto-react-api.vercel.app/users/register', user)
          //     .then((response) => {

          //         // CAMBIADO  A newUser en lugar de user
          //         // setIsRegistered(setLocal('users', newUser))


          //         if (response) {
          //             alert('Registrado con exito')
          //         }
          //     })

          //     .catch((error) => {
          //         console.log(error.response.data)
          //     })

          // CAMBIADO A handleClickValueRegister en lugar handleClickValue
          handleClickValueRegister({ nickname: '', email: '', password: '', confirmPassword: '' })
          navigate('/')
      } else {
          alert('El password no es correcto')
          handleClickValueRegister({ nickname: '', email: '', password: '', confirmPassword: '' })
      }
  }

  return (
    <form action="" className="register">

    {/* AÑADIDOS El LABEL E INPUT PARA: Nombre */}
                <label className="register__label" htmlFor="nickname">Nombre Completo</label>
                <input type="text" className="register__input" id='nickname' onChange={handleFormRegister} value={user.nickname}/>


                <label className="register__label" htmlFor="email">Email</label>
                <input type="text" className="register__input" id='email' onChange={handleFormRegister} value={user.email}/>
                <label className="register__label" htmlFor="password">Password</label>
                <input type="password" className="register__input" id="password" onChange={handleFormRegister} value={user.password}/>

{/* AÑADIDOS El LABEL E INPUT PARA: Confirmar Password */}
                <label className="register__label" htmlFor="confirmPassword">Confirmar Password</label>
                <input type="password" className="register__input" id="confirmPassword" onChange={handleFormRegister} value={user.confirmPassword} />
                <input type="file" accept='jpg / png / jpeg'/>
                <button onClick={handleClick}>Registrar</button>
                <button className="button" onClick={handleClickLogin}>¿Ya estás Registrado? Loguéate</button>

    </form>
  )
}

export default FormRegister;