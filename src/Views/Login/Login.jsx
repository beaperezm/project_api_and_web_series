import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import '../../styles/Login.scss';

function Login ({handleOption}){
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate(); 
    const handleChange = (event) => {
        setUser({...user, [event.target.id]: event.target.value})
    }
    const handleInput = () => {
        handleOption('All')
    }
    const handleClick = (event) => {
        event.preventDefault();
        axios.post('https://proyecto-react-api.vercel.app/users/login', user)
        .then((response) => {
            if(response.status === 200){
                navigate('/')
            }else {
                console.log(response);
                // navigate('/register')
            }
        })
        setUser({email: '', password: ''})
    }
    return (
        <div className="divLogin">
            <form action="" className="login">
                <label className="login__label" htmlFor="email">Email</label>
                <input type="text" className="login__input" id='email' onChange={handleChange} value={user.email}/>
                <label className="login__label" htmlFor="password">Password</label>
                <input type="password" className="login__input" id="password" onChange={handleChange} value={user.password}/>
                <button className="button" onClick={handleClick}>Login</button>
            </form>
            <p className="home__button"><Link className="css-button-fully-rounded--grey " to="/" onClick={handleInput}>HOME</Link></p>
        </div>
    )
}

export default Login; 