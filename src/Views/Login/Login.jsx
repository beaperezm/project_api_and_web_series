import React from "react";
import { useNavigate} from "react-router-dom";
import axios from 'axios';
import Form from '../../components/Form/Form.jsx';
import '../../styles/Login.scss';
import ButtonHome from "../../components/ButtonHome/ButtonHome.jsx";

function Login({ handleOption, handleChange, user, handleClickValue }) {

    const navigate = useNavigate();
    const handleClick = (event) => {
        event.preventDefault();
        axios.post('https://proyecto-react-api.vercel.app/users/login', user)
            .then((response) => {
                if (response.status === 200) {
                    navigate('/')
                } else {
                    navigate('/register')
                }
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