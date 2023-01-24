import React from "react";
import '../../styles/Profile/isLogged.scss';

function IsLogged ({ setIsLogged, userLoggedEmail, userLoggedNickname, handleClickValueLoggedEmail, handleClickValueLoggedNickname, handleClickValueLoggedAge}){
    const handleLogout = () => {
        handleClickValueLoggedEmail();
        handleClickValueLoggedNickname();
        handleClickValueLoggedAge();
        setIsLogged(false)
    }
    return (
        <header className="profile">
            <h3 className="profile__title">BIENVENID@</h3> 
            <p className="profile__data">EMAIL: {userLoggedEmail}</p>
            <p className="profile__data">NICKNAME: {userLoggedNickname}</p>
            <button className="profile__logout"  onClick={handleLogout}>Logout</button>
        </header>
    )
}

export default IsLogged;