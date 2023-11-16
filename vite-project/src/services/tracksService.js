import { request } from "./requester";


const baseUrl = "http://localhost:3030/data";

export const getAll = () => request(`${baseUrl}/tracks`)

export const getOne = (trackId) => {
    return fetch(`${baseUrl}/tracks/${trackId}`)
        .then(res => res.json())
};

export const create = async (trackDetails, token) => {
    let response = await fetch(`${baseUrl}/tracks`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-Authorization": token,
        },
        body: JSON.stringify({...trackDetails})
    });

    let result = await response.json();

    return result;
};


export const edit = async (trackDetails, token, tarckId) => {
    let response = await fetch(`${baseUrl}/tracks/${tarckId}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            "X-Authorization": token,
        },
        body: JSON.stringify({...trackDetails, likes: []})
    });

    let result = await response.json();

    return result;
};

export const del = (tarckId, token) => {
    return fetch(`${baseUrl}/tracks/${tarckId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
};



export const wtf = (tarckId, track, token) => {
    return fetch(`${baseUrl}/tracks/${tarckId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(track)
    }).then(res => res.json());
};