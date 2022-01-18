import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export function getPlans() {
    return axios.get(`${BASE_URL}/plans`);
}

export function getOriginCodes() {
    return axios.get(`${BASE_URL}/originCodes`);
}

export function getDestinationCodes(code) {
    return axios.get(`${BASE_URL}/destinationCodes/${code}`);
}

export function makeSimulation(body) {
    return axios.post(`${BASE_URL}/simulation`, body);
}
