import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import '../../styles/Option.scss';
import LoaderContext from "../../context/LoaderContext";

function Option({ series, handleOptionInput, option }) {
    const serieId = series.map((serie) => {
        return serie.id;
    })
    const serieToString = serieId.toString();
    const isLoaded = useContext(LoaderContext);
    return (
        <div className="divOption">
            <div className={`option ${!isLoaded ? "display" : null}`}>
                <label className="option__label" htmlFor="titulo">Titulo</label>
                <select className="option__select" name="" id="titulo" value={option} onChange={(event) => handleOptionInput(event.target.value)}>
                    <option value='All'>TODOS</option>
                    {series.map((serie, index) => {
                        return <option value={serie.title} key={index}>{serie.title}</option>
                    })}
                </select>
                <Link to={`selected/${serieToString}`}>
                    <button className="css-button-fully-rounded--grey">Elegir</button>
                </Link>
            </div>
        </div>
    )
}

export default Option;