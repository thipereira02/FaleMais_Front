import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export function getPlans() {
    return axios.get(`${BASE_URL}/plans`);
}