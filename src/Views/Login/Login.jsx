import React, {useState} from "react";
import { useNavigate} from "react-router-dom";
import axios from 'axios';
import Form from '../../components/Form/Form.jsx';
import '../../styles/Login.scss';
import ButtonHome from "../../components/ButtonHome/ButtonHome.jsx";
import {getLocal, setLocal} from '../../services/localStorage.js';
import ButtonLogin from '../../components/Button/Button.jsx';

function Login({ handleOption, handleChange, user, handleClickValue, setIsLogged }) {
    const navigate = useNavigate();
    const handleClick = (event) => {
        event.preventDefault();
        axios.post('https://proyecto-react-api.vercel.app/users/login', user)
            .then((response) => {
                const logged = getLocal('users', user)
                if (user.email === logged.email && user.password === logged.password ){
                    setIsLogged(true);
                    navigate('/')
                } else{
                  
                }
                
                // getLocal('users', user)
                // if (response.status === 200) {
                //     
                // } else {
                //     // navigate('/register')
                // }
                handleClickValue({ email: '', password: '' })
            })
    }
    return (
        <div className="divLogin">
            <Form handleChange={handleChange} user={user} />
            <button className="button" onClick={handleClick}>Login</button>
            <ButtonHome handleOption={handleOption} />
        </div>
    )
}

export default Login; 