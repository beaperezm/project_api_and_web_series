import React from "react";
import Serie from "./Series";
import {useParams, Link} from 'react-router-dom'

function SelectedSerie({ series }) {
   const params = useParams();
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