import React from 'react'

//---- CAMBIADO A FormLogin
import '../../styles/FormLogin.scss'
import getDataLogin from "../../services/getDataLogin.js";
import { useNavigate} from "react-router-dom";

//---- CAMBIADO A const FormLogin en lugar de Form
// --- CAMBIADO el destructuring a  handleChangeLogin en lugar de handleChange
const FormLogin = ({ handleChangeLogin, user, setIsLogged, setUserLogged, handleClickValueLogin }) => {
  const navigate = useNavigate();
  const handleClickRegister = () =>{
    navigate('/register')
  }
  const handleClick = (event) => {
        
    event.preventDefault();
    getDataLogin(user);
    // axios.post('https://proyecto-react-api.vercel.app/users/login', user)
    //     .then((response) => {

    //         // CAMBIADO A 'usersLogin' en lugar de 'users'
    //         const logged = getLocal('usersLogin', user)
    //         if (user.email === logged.email && user.password === logged.password ){
                setIsLogged(true);
                setUserLogged(user.email)
                navigate('/')
    //         }
        

            // CAMBIADO A handleClickValueLogin en lugar handleClickValue
            handleClickValueLogin({ email: '', password: '' })
        }

  //---- CAMBIADO A handleFormLogin en lugar de handleForm
  const handleFormLogin = (event) => {

    //---- CAMBIADO A handleChangeLogin en lugar de handleChange
    handleChangeLogin({ ...user, [event.target.id]: event.target.value })
  }

  return (
    <form action="" className="login">
      <label className="login__label" htmlFor="email">Email</label>

      {/* cambiado el onchange= {handleFormLogin} en lugar de {handleForm} */}
      <input type="text" className="login__input" id='email' onChange={handleFormLogin} value={user.email} />
      <label className="login__label" htmlFor="password">Password</label>

      {/* cambiado el onchange= {handleFormLogin} en lugar de {handleForm}*/}
      <input type="password" className="login__input" id="password" onChange={handleFormLogin} value={user.password} />

      <button className="button" onClick={handleClick}>Login</button>
      <button className="button" onClick={handleClickRegister}>¿Aun no estás Registrado?</button>
    </form>
  )
}

//---- CAMBIADO A FormLogin en lugar de Form
export default FormLogin;