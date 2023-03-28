import axios from 'axios';

axios.defaults.baseURL = 'https://api.thedogapi.com/v1';
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;

export const fetchBreeds = async () => {
    const response = await axios.get('/breeds');
    return response.data;
}
