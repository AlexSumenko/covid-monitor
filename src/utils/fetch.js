import { API_BASE_URL } from './constants';

export const httpAddressRequest = (method, url, data) => {
    return fetch(`${API_BASE_URL}${url}`, {
        method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(res => {
            if (res.status < 200 || res.status >= 300) {
                throw res.statusText;
            }
            return res.json();
        })
        .catch(err => alert(err));
};
