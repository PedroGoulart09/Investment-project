import axios from 'axios';


export const useLogin = async (login: string, password: string) => {
    const {data} =  await axios({
        method: 'POST',
        url: 'http://localhost:8080/login/',
        data: {
            login,
            password,
        },
        headers: {
            contentType: 'application/json'
        }
    })
    localStorage.setItem('token', data.token);
    return data.token;
}