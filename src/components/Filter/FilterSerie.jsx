import React from "react";

function Filter ({ handleInput}){
    const handleSearch = (event) => {
        handleInput(event.target.value)
    }
    return (
        <div>
            <input type="text" onChange={(handleSearch)}/>
        </div>
    )
}

export default Filter;