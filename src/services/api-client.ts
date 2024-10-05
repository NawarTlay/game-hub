import axios from 'axios';

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '14e44abde69d45dbbf400c14b532410a'
    }
})