import React from "react";
import Serie from "./Series";
import '../styles/ListSerie.scss'

function ListSeries({ series, nextPage, previousPage}) {
    const nextPageClick = () => {
        nextPage()
    }
    const previousPageClick = () => {
        previousPage()
    }
    const listSeries = series.map((serie, index) => {
        return <Serie serie={serie} key={index} />
    })
    return (
        <div className="divList">
            <h1 className="title">SERIES MALEON</h1>
            <ul className="listSerie">
                {listSeries}
            </ul>
            <button onClick={previousPageClick}> Página Anterior </button>
            <button onClick={nextPageClick}>Siguiente Página</button>
        </div>

    )
}

export default ListSeries; 