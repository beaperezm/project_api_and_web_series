import React, {useContext} from "react";
import '../../styles/Filter.scss';
import LoaderContext from "../../context/LoaderContext";

function Filter({ handleSearchInput }) {
    const handleSearch = (event) => {
        handleSearchInput(event.target.value)
    };
    const isLoaded = useContext(LoaderContext);
    return (
        <div className="divFilter">
            <div className={`filter ${!isLoaded ? "display":null }`}>
                <label className="filter__label" htmlFor="">Filtra por Nombre</label>
                <input className="filter__input" type="text" onChange={(handleSearch)} />
            </div>
        </div>
    )
}

export default Filter;