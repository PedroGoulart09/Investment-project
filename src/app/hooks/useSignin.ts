import axios from 'axios';


export const useSignin = async (login: string, password: string) => {
    return await axios({
        method: 'POST',
        url: 'http://localhost:8080/login/register',
        data: {
            login,
            password,
            role: "USER"
        },
        headers: {
            'Content-Type': 'application/json',
        }
    });

};
