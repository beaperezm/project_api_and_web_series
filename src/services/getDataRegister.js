import axios from "axios";


const getDataRegister = (user) => {
    const result = {
        goodResult: true,
        badResult: false
    }
    return axios.post('https://proyecto-react-api.vercel.app/users/register', user)
            .then((response) => {
                if (response) {
                    return result.goodResult
                }
            })
            .catch((error) => {
                console.log(error);
                if (error) {
                    return result.badResult
                }
            })
            
};

export default getDataRegister;