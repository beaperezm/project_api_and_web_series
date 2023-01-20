import axios from "axios";

const getDataRegister = (user) => {
    axios.post('https://proyecto-react-api.vercel.app/users/register', user)
            .then((response) => {

                // CAMBIADO  A newUser en lugar de user
                if (response) {
                    alert('Registrado con exito')
                }
            })

            .catch((error) => {
                console.log(error.response.data)
            })
};

export default getDataRegister;