import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance; 

//There can only be one default. You can use alias for it when importing this as well!