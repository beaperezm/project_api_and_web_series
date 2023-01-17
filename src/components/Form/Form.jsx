import React from 'react'
import '../../styles/Form.scss'

const Form = ({ handleChange, user }) => {

    const handleForm = (event) => {
        handleChange({...user, [event.target.id]: event.target.value})
    }

  return (
    <form action="" className="login">
                <label className="login__label" htmlFor="email">Email</label>
                <input type="text" className="login__input" id='email' onChange={handleForm} value={user.email}/>
                <label className="login__label" htmlFor="password">Password</label>
                <input type="password" className="login__input" id="password" onChange={handleForm} value={user.password}/>
    </form>
  )
}

export default Form;