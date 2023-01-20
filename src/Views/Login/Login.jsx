import React from "react";

// ---- CAMBIADO A FormLogin
import FormLogin from '../../components/Form/FormLogin.jsx';


import '../../styles/Login.scss';
import ButtonHome from "../../components/ButtonHome/ButtonHome.jsx";


// CAMBIADO EL DESTRUCTURING A handleChangeLogin en lugar handleChange y handleClickValueLogin en lugar handleClickValue
function Login({ handleOption, handleChangeLogin, user, handleClickValueLogin, setIsLogged, setUserLogged }) {
    
    return (
        <div className="divLogin">
    {/* CAMBIADO A <FormLogin handleChangeLogin={handleChangeLogin} user={user} /> 
   antes estaba como: Form <FormLogin handleChange={handleChange} user={user} />*/}
            <FormLogin setIsLogged={setIsLogged} handleChangeLogin={handleChangeLogin} user={user} setUserLogged={setUserLogged} handleClickValueLogin={handleClickValueLogin}/>
            <ButtonHome handleOption={handleOption} />
        </div>
    )
}

export default Login; 