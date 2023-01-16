import React, {useContext} from "react";
import '../../styles/Filter.scss';
import LoaderContext from "../../context/LoaderContext";

function Filter({ handleInput }) {
    const handleSearch = (event) => {
        handleInput(event.target.value)
    };
    const loader = useContext(LoaderContext);
    return (
        <div className="divFilter">
            <div className={`filter ${!loader ? "display":null }`}>
                <label className="filter__label" htmlFor="">Filtra por Nombre</label>
                <input className="filter__input" type="text" onChange={(handleSearch)} />
            </div>
        </div>
    )
}

export default Filter;