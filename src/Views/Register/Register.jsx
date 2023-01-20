import React from "react";

// ---- CAMBIADO A FormRegister
import FormRegister from '../../components/Form/FormRegister.jsx';

//---AÑADIDO EL scss (he creado el fichero de cero)
import '../../styles/Register.scss';

import ButtonHome from "../../components/ButtonHome/ButtonHome.jsx";
// CAMBIADO EL DESTRUCTURING A 
// ---> handleChangeRegister en lugar handleChange
// ---> newUser en lugar de user
// ---> handleClickValueRegister en lugar de handleClickValue
function Register({ handleOption, user, handleChangeRegister, handleClickValueRegister, setIsRegistered}) {

    return (
        // CAMBIADO EL CLASSNAME A divRegister en lugar de divLogin
        <div className="divRegister">
            {/* CAMBIADO A <FormRegister handleChangeRegister={handleChangeRegister} newUser={newUser} />
   antes estaba como: Form <FormLogin handleChange={handleChange} user={user} />*/}
            <FormRegister handleChangeRegister={handleChangeRegister} user={user} handleClickValueRegister={handleClickValueRegister} setIsRegistered={setIsRegistered}/>
            <ButtonHome handleOption={handleOption} />
        </div>
    )
}

export default Register; 