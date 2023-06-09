import Axios from "axios"

const config = { headers: {'Content-Type': 'application/json'} };
const URL = 'http://127.0.0.1:8000/api/token/';

export async function login(username, password) {
    const body = JSON.stringify({ username, password });
    let success = false;

    try{
        const { data } = await Axios.post(URL, body, config);
        sessionStorage.setItem('refresh', data.refresh);
        sessionStorage.setItem('access', data.access)
        sessionStorage.setItem('user_id', data.id)
        success = true;
    } catch (error){
        console.error(error);
        success = false;
    }

    return success;
}