import React from "react";
import { Link, useParams } from 'react-router-dom';
import '../styles/DetailSerie.scss';

function DetailSeries({ series, handleOption }) {
    const params = useParams();
    const selectedSerie = series.find((serie) => {
        return serie.id === parseInt(params.id);
    });
    const handleInput = () => {
        handleOption('All')
    }

    return (
        <div className="serie">
            <h2 className="serie__title">{selectedSerie.title}</h2>
            <img src={selectedSerie.picture} alt="Foto Serie" className="serie__image" />
            <div className="grid">

                <p className="grid__director"> DIRECTOR: </p>
                <ul className="grid__director_list">
                    {selectedSerie.director.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
                <p className="grid__genre"> GENERO:</p>
                <ul className="grid__genre_list">
                    {selectedSerie.genre.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>

                <p className="grid__platform"> PLATAFORMA:</p>
                <p>{selectedSerie.platform}</p>

                <p className="grid__seasons"> TEMPORADAS: </p>
                <p>{selectedSerie.seasons}</p>


                <p className="grid__year"> AÑO EMISION: </p>
                <p>{selectedSerie.year}</p>

                <div className="grid__sinopsys">
                    <p>{selectedSerie.synopsis}</p>
                </div>
            </div>
            <p className="serie__button"><Link className="css-button-fully-rounded--grey " to="/" onClick={handleInput}>HOME</Link></p>
        </div>
    )
}

export default DetailSeries;