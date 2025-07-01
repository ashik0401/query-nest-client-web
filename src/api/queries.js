import axios from 'axios';

export const queries = () => {
    return axios
        .get('http://localhost:3000/queries',)
        .then(res => res.data);
};
