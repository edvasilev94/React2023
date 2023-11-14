import { request } from "./requester";


const baseUrl = "http://localhost:3030/jsonstore";

export const getAll = () => request(`${baseUrl}/tracks`)

export const getOne = (trackId) => {
    return fetch(`${baseUrl}/tracks/${trackId}`)
        .then(res => res.json())
};