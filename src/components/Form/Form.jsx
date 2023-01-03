import React from "react";
import '../../styles/Form.scss'

function Form (){

    return (
        <div className="divForm">
            <form action="" className="form">
                <label className="form__label" htmlFor="">Email</label>
                <input type="text" className="form__input"/>
                <label className="form__label" htmlFor="">Password</label>
                <input type="text" className="form__input"/>
                <input className="" type="submit" name="" id="" />
            </form>
        </div>
    )
}

export default Form; 