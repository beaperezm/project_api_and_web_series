import React from "react";
import axios from 'axios';
import Form from '../../components/Form/Form.jsx';
import '../../styles/Register.scss';
import ButtonHome from "../../components/ButtonHome/ButtonHome.jsx";

function Register({ handleOption, user, handleChange, handleClickValue }) {

    const handleClick = (event) => {
        event.preventDefault();
        axios.post('https://proyecto-react-api.vercel.app/users/register', user)
            .then((response) => {
                if (response.status === 201) {
                    alert('Registrado con exito')
                }
            })
        handleClickValue({ email: '', password: '' })
    }
    return (
        <div className="divForm">
            <Form handleChange={handleChange} user={user} />
            <button onClick={handleClick}>Registrar</button>
            <ButtonHome handleOption={handleOption} />
        </div>
    )
}

export default Register; 