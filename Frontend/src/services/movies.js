import axios from "axios";
import { config } from "./config";

export async function getMovies() {
    try {
        const url = `${config.server}/movies`;

        const response = await axios.get(url, {
            headers :  {
                token : localStorage.getItem('token'),
            },
        })
        return response.data;
    } catch (ex) {
        console.log(`Exception : `, ex)
    }
}