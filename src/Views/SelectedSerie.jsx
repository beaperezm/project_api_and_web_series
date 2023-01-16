import React from "react";
import Serie from "../Views/Series.jsx";

function SelectedSerie({ series }) {
    const listSeries = series.map((serie, index) => {
        return <Serie serie={serie} key={index} />
    })
    return (
        <div>
           <ul>
            {listSeries}
           </ul>
        </div>

    )
}

export default SelectedSerie; 