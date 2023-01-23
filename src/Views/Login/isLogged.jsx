import React from "react";

function IsLogged ({ setIsLogged, userLoggedEmail, userLoggedNickname}){
    const handleLogout = () => {
        setIsLogged(false)
    }
    console.log(userLoggedEmail);
    console.log(userLoggedNickname);
    return (
        <div className="">
            <h3>BIENVENID@</h3> 
            <p>EMAIL: {userLoggedEmail}</p>
            <p>NICKNAME: {userLoggedNickname}</p>
            <button className="css-button-fully-rounded--grey"  onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default IsLogged;