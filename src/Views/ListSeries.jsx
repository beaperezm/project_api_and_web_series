import React, {useContext} from "react";
import Serie from "../Views/Series";
import '../styles/ListSerie.scss';
import LoaderContext from "../context/LoaderContext";

function ListSeries({ series, nextPage, previousPage, showPreviousButton, showNextButton}) {
    const nextPageClick = () => {
        nextPage()
    }
    const previousPageClick = () => {
        previousPage()
    }
    const listSeries = series.map((serie, index) => {
        return <Serie serie={serie} key={index} />
    })
    const isLoaded = useContext(LoaderContext);

    return (
        <div className="divList">
            <h1 className={`title ${!isLoaded ? "display": null}`}>SERIES MALEON</h1>
            <ul className="listSerie">
                {listSeries}
            </ul>
            <button className={`${!isLoaded ? "display" : null} ${!showPreviousButton ? "display" : null}`} onClick={previousPageClick}> Página Anterior </button>
            <button className={`${!isLoaded ? "display" : null} ${showNextButton ? "show" : "display"}`} onClick={nextPageClick}>Siguiente Página</button>
        </div>

    )
}

export default ListSeries; 