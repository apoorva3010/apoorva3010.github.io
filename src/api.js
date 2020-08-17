import axios from "axios";

export async function getData(link) {
    return await axios.get(link);
}