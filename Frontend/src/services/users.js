import axios from 'axios';
import { config } from './config';

export async function register(firstName, lastName, email, password,confirmPassword, phone, birthDate){
    try {
        const url = `${config.server}/api/auth/register`;
        const body = { firstName, lastName, email, password, confirmPassword, phone, birthDate };

        const response = await axios.post(url,body);
        return response.data;
    }catch(ex){
        console.log(`exception : `,ex)
    }
}

export async function login(email, password){
    try {
        const url = `${config.server}/api/auth/login`;
        const body = { email, password };
        const response = await axios.post(url,body);

        return response.data;
    } catch (ex) {
        console.log(`Exception : `,ex);
    }
}
export async function changePassword(password){
    try {
        const url = `${config.server}/login`;
        const body = {  password };
        const response = await axios.post(url,body);

        return response.data;
    } catch (ex) {
        console.log(`Exception : `,ex);
    }
}
