import axios from "axios";


const getDataLogin = (user) => {
    
    axios.post('https://proyecto-react-api.vercel.app/users/login', user)
            .then((response) => {

                // CAMBIADO  A newUser en lugar de user
             console.log(response)
                

                if (response) {
                   alert('logueado con exito') 
                }
            })

            .catch((error) => {
                console.log(error)
            })
};

export default getDataLogin;