import axios from "axios";

const getDataLogin = (user) => {
    const userDB = {
        nickname: '',
        email: '',
        age: '',
        goodResult: false,
        badResult: false
        }
    return axios.post('https://proyecto-react-api.vercel.app/users/login', user)
        .then((response) => {
            if (response) {
                userDB.goodResult = true;
                userDB.email = response.data.email;
                userDB.nickname = response.data.nickname;
                userDB.age = response.data.age;
                return userDB;
            }
        })
        .catch((error) => {
            if (error) {
                userDB.badResult = true
                return userDB;
            }
        });
};


export default getDataLogin;