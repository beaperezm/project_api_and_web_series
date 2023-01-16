import React from "react";
import { Link } from 'react-router-dom';

function ButtonHome ({ handleOption }) {

    const handleInput = () => {
        handleOption('All')
    }
    return (

        <p className="serie__button"><Link className="css-button-fully-rounded--grey " to="/" onClick={handleInput}>HOME</Link></p>

    );
};

export default ButtonHome;