import React, {PropTypes, Component} from 'react'
import axios from 'axios'
import {API_GET_PLACES} from '../../constants'

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