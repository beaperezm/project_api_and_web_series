import axios from "axios";


const getDataRegister = (user) => {
    const result = {
        ok: true,
        mal: false
    }
    return axios.post('https://proyecto-react-api.vercel.app/users/register', user)
            .then((response) => {
                if (response) {
                    return result.ok
                }
            })
            .catch((error) => {
                if (error) {
                    return result.mal
                }
            })
            
};

export default getDataRegister;