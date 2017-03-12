import {GET_LOCATION} from '../constants'

export default function (coords = [{'lat':  37.7823364},{'lng': -122.3913973}], action) {
    switch (action.type) {
        case GET_LOCATION :
            return [action.payload.coords, ...state];
            break;
    }

    return state
}