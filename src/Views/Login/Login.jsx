import React from "react";

// ---- CAMBIADO A FormLogin
import   '../../styles/Form/Login.scss';
import FormLogin from '../../components/Form/FormLogin.jsx';
import ButtonHome from "../../components/ButtonHome/ButtonHome.jsx";

function Login({ handleOptionInput, handleChangeLogin, user, handleResetValueLogin, setIsLogged, setUserLoggedEmail, setUserLoggedNickname, userLoggedNickname, userLoggedEmail, userLoggedAge, setUserLoggedAge, setIsRegistered, setIsLoggedModal}) {
    return (
        <div className="divLogin">
            <FormLogin setUserLoggedNickname={setUserLoggedNickname} setUserLoggedEmail={setUserLoggedEmail} handleChangeLogin={handleChangeLogin} user={user} handleResetValueLogin={handleResetValueLogin} userLoggedNickname={userLoggedNickname} userLoggedEmail={userLoggedEmail} setIsLogged={setIsLogged} userLoggedAge={userLoggedAge} setUserLoggedAge={setUserLoggedAge} setIsRegistered={setIsRegistered} setIsLoggedModal={setIsLoggedModal}/>
            <div className="divLogin__buttonHome">
            <ButtonHome handleOption={handleOptionInput} />
            </div>
        </div>
    )
}

export default Login; 