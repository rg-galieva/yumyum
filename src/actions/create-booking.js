import axios from 'axios'


export function createBooking(city: 'Moscow') {
    const API_YAHOO_URL = API_YAHOO_QUERY + `text="${city}")&format=json`;
    const request = axios.get(API_YAHOO_URL);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}