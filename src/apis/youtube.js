import axios from 'axios';

const KEY = 'AIzaSyCJPiDQNY3mwfCicPvChZrat_1x3lSzYzc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

 