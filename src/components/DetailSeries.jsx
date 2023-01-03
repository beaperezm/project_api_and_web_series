import React from "react";
import { Link, useParams } from 'react-router-dom';
import '../styles/DetailSerie.scss';

function DetailSeries({ series, handleOption }) {
    const params = useParams();
    const selectedSerie = series.find((serie) => {
        return serie.id === parseInt(params.id);
    });
    const handleInput = (event) => {
        handleOption(event.target.value)
    }

    return (
        <div className="serie">
            <h2 className="serie__title">{selectedSerie.title}</h2>
            <img src={selectedSerie.picture} alt="Foto Serie" className="serie__image" />
            <div className="serie__datos">
                <p className="serie__datos_subtitle"> DIRECTOR: </p>
                {selectedSerie.director.map((item, index) => {
                    return <ul key={index}>
                        <li>{item}</li>
                    </ul>
                })}
            </div>
            <div className="serie__datos">
                <p className="serie__datos_subtitle"> GENERO:</p>
                {selectedSerie.genre.map((item, index) => {
                    return <ul key={index}>
                        <li>{item}</li>
                    </ul>
                })}
            </div>
            <div className="serie__datos">
                <p className="serie__datos_subtitle"> PLATAFORMA:</p>
                <p>{selectedSerie.platform}</p>
            </div>
            <div className="serie__datos">
                <p className="serie__datos_subtitle"> TEMPORADAS: </p>
                <p>{selectedSerie.seasons}</p>
            </div>
            <div className="serie__datos">
                <p className="serie__datos_subtitle"> AÑO EMISION: </p>
                <p>{selectedSerie.year}</p>
            </div>
            <div className="serie__datos">
                <p>{selectedSerie.synopsis}</p>
            </div>
            <p className="serie__button"><Link className="css-button-fully-rounded--grey " to="/" onClick={handleInput}>HOME</Link></p>
        </div>
    )
}

export default DetailSeries;