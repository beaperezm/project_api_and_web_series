import React from "react";
import Serie from "../Views/Series";
import '../styles/ListSerie.scss'

function ListSeries({ series, nextPage, previousPage, loader, showPreviousButton, showNextButton}) {
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
            <h1 className={`title ${!loader ? "display": null}`}>SERIES MALEON</h1>
            <ul className="listSerie">
                {listSeries}
            </ul>
            <button className={`${!loader ? "display" : null} ${!showPreviousButton ? "display" : null}`} onClick={previousPageClick}> Página Anterior </button>
            <button className={`${!loader ? "display" : null} ${showNextButton ? "show" : "display"}`} onClick={nextPageClick}>Siguiente Página</button>
        </div>

    )
}

export default ListSeries; 