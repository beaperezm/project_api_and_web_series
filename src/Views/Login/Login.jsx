import React from "react";

// ---- CAMBIADO A FormLogin
import   '../../styles/Login.scss';
import FormLogin from '../../components/Form/FormLogin.jsx';
import ButtonHome from "../../components/ButtonHome/ButtonHome.jsx";

function Login({ handleOption, handleChangeLogin, user, handleResetValueLogin, setIsLogged, setUserLoggedEmail, setUserLoggedNickname, userLoggedNickname, userLoggedEmail}) {
    
    return (
        <div className="divLogin">
            <FormLogin setUserLoggedNickname={setUserLoggedNickname} setUserLoggedEmail={setUserLoggedEmail} handleChangeLogin={handleChangeLogin} user={user} handleResetValueLogin={handleResetValueLogin} userLoggedNickname={userLoggedNickname} userLoggedEmail={userLoggedEmail} setIsLogged={setIsLogged}/>
            <div className="divLogin__buttonHome">
            <ButtonHome handleOption={handleOption} />
            </div>
        </div>
    )
}

export default Login; 