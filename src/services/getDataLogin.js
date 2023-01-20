import axios from "axios";

const getDataLogin = (user) => {
    const result = {
        ok: true,
        mal: false
    }
    return axios.post('https://proyecto-react-api.vercel.app/users/login', user)
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


export default getDataLogin;