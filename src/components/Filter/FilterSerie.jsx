import React from "react";

function Filter ({foundSeries, handleInput}){
    
    return (
        <div>
            <input type="text" onChange={(event) => handleInput(event.target.value)}/>
        </div>
    )
}

export default Filter;