import React from "react";
import {useParams} from 'react-router-dom';

function DetailSeries ({series}){
    const params = useParams();
    const foundSerie = series.find((serie) => {
        return serie.title === params.id;
    })
    return (
        <div>
            <h2>{foundSerie.title}</h2>
            <img src={foundSerie.picture} alt="" />
            <p>{foundSerie.director}</p>
            <p>{foundSerie.genre}</p>
            <p>{foundSerie.platform}</p>
            <p>{foundSerie.seasons}</p>
            <p>{foundSerie.year}</p>
            <p>{foundSerie.synopsis}</p>
        </div>
    )
}

export default DetailSeries;