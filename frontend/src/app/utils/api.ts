import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/';

export const fetchHotels = async () => {
    try {
        const response = await axios.get(`${API_URL}hotels`, {
            headers: {
                'Accept': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching hotels:', error);
        throw error; // Re-throw the error for further handling
    }
};