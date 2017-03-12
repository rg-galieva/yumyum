import React, {PropTypes, Component} from 'react'
import axios from 'axios'
import PlaceList from '../../components/place-list'
import {API_GET_PLACES} from '../../constants'

import place_list from '../../../test/db/place-list.json'

class PlaceListContainer extends Component {
    constructor() {
        super();
        this.state = {
            place_list : ''
        }
    }

    componentDidMount() {
        let {lat, lng} = this.props;

        // axios.get(API_GET_PLACES)

        // put the result in state
    }

    render() {
        return (
            <div>
                <PlaceList place_list={place_list}/>
            </div>
        );
    }

    static propTypes = {
       place_info : PropTypes.shape({
           lat: PropTypes.number,
           lng: PropTypes.number
       })
    };

}

export default PlaceListContainer;