import React from "react";
import Serie from "./Serie";

function ListSeries({ series }) {
    console.log(series)
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

export default ListSeries; 