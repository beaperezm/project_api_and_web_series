import React from "react";
import { Link } from 'react-router-dom';
import '../../styles/Option.scss';

function Option({ series, handleOption, option }) {
    const serieId = series.map((serie) => {
        return serie.id;
    })
    const serieToString = serieId.toString();
    return (
        <div className="divOption">
            <div className="option">
                <label className="option__label" htmlFor="titulo">Titulo</label>
                <select className="option__select" name="" id="titulo" value={option} onChange={(event) => handleOption(event.target.value)}>
                    <option value='All'>TODOS</option>
                    {series.map((serie, index) => {
                        return <option value={serie.title} key={index}>{serie.title}</option>
                    })}
                </select>
                <Link to = {`selected/${serieToString}`}>
                <input type="submit" />
                </Link>
            </div>
        </div>
    )
}

export default Option;