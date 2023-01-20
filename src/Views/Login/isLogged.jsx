import React from "react";

//CAMBIADO EL DESTRUCTURING A isLogin en lugar de isRegistered
function IsLogged ({ setIsLogged, userLogged}){
    const handleLogout = () => {
        setIsLogged(false)
    }
    return (
        <div className="">
            <p>{userLogged}</p>
            <button className="css-button-fully-rounded--grey"  onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default IsLogged;