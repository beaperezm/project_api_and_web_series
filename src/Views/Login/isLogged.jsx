import React from "react";

function IsLogged ({isRegistered, setIsLogged}){
    const handleLogout = () => {
        setIsLogged(false)
    }
    return (
        <div className="">
            <p>{isRegistered.email}</p>
            <p>{isRegistered.password}</p>
            <button className="css-button-fully-rounded--grey"  onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default IsLogged;