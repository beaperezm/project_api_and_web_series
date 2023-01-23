import React from "react";
// ---- CAMBIADO A FormRegister
import FormRegister from '../../components/Form/FormRegister.jsx';


//---AÑADIDO EL scss (he creado el fichero de cero)
import '../../styles/Form/Register.scss';

import ButtonHome from "../../components/ButtonHome/ButtonHome.jsx";



function Register({ handleOptionInput, handleChangeRegister, handleClickValueRegister, setIsRegistered, user}) {
    return (
        <div className="divRegister">
            <FormRegister handleChangeRegister={handleChangeRegister} handleClickValueRegister={handleClickValueRegister} setIsRegistered={setIsRegistered} user={user}/>
            <div className="divRegister__buttonHome">
            <ButtonHome handleOptionInput={handleOptionInput} />
            </div>
            
        </div>
    )
}

export default Register; 