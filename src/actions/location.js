import {GET_LOCATION} from '../constants'

export function getLocation() {
    const location = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(function(position) {
            resolve(`{{'lat':${position.coords.latitude}}, {'lng': ${position.coords.longitude}}`)
        });
    }).then((coords) => {
        console.log("---coords", coords);
        return coords;
    });

    return {
        type: GET_LOCATION,
        payload: location
    }
}