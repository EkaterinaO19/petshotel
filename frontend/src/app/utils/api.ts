import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/';

export const fetchHotels = async (page = 1, pageSize = 10) => {
    try {
        const response = await axios.get(`${API_URL}hotels`, {
            params: {
                page: page,
                page_size: pageSize,
            },
            headers: {
                'Accept': 'application/json',
            },
        });
        return {
            hotels: response.data.data, 
            total: response.data.total  
        };
    } catch (error) {
        console.error('Error fetching hotels:', error);
        throw error; // Re-throw the error for further handling
    }
};

