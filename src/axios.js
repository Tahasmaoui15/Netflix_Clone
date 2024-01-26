import axios from "axiox";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;