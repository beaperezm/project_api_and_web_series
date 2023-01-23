import React from "react";
import { useParams } from 'react-router-dom';
import '../../styles/Series/DetailSerie.scss';
import ButtonHome from '../../components/ButtonHome/ButtonHome.jsx';

function DetailSeries({ series, handleOption }) {
    const params = useParams();
    const selectedSerie = series.find((serie) => {
        return serie.id === parseInt(params.id);
    });
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
           <ButtonHome handleOption={handleOption}/>
        </div>
    )
}

export default DetailSeries;