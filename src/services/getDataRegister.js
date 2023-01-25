import axios from "axios";


const getDataRegister = (user) => {
    const result = {
        goodResult: true,
        badResultEmail: 'Email incorrecto',
        badResultAge: 'Edad requerida',
        badBothResult: 'Email y edad incorrecto'
    }
    return axios.post('https://proyecto-react-api.vercel.app/users/register', user)
            .then((response) => {
                if (response) {
                    return result.goodResult
                }
            })
            .catch((error) => {
                console.log(error);
                if (error.response.data === 'User validation failed: email: El email no tiene un formato válido') {
                    return result.badResultEmail
                } else if (error.response.data === 'User validation failed: age: Path `age` is required.') {
                    return result.badResultAge;
                } else if (error.response.data === 'User validation failed: email: El email no tiene un formato válido, age: Path `age` is required.'){
                    return result.badBothResult
                }
            })
            
};

export default getDataRegister;