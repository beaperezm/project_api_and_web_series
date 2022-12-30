import React from "react";
import {Link} from 'react-router-dom';

function Serie({ serie }) {

    return (
        <div className="series">
            <li className="cardSerie">
                <Link to = {`detail/${serie.id}`}>
                    <h2>{serie.title}</h2>
                    <img src={serie.picture} alt="Foto Serie"  className="image"/>
                </Link>
            </li>
        </div>
    )
}

export default Serie;