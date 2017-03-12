import React, {PropTypes, Component} from 'react'
import Place from '../../components/place'

class PlaceList extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    getPlaceList = () => {
        return this.props.place_list.map((place) => <div key={place.id}><Place place={place}/></div>)
    }

    render() {
        let {place_list} = this.props;

        return (
            <div>
                {this.getPlaceList()}
            </div>
        );
    }

    static propTypes = {
        place_list : PropTypes.array.isRequired
    };

}

export default PlaceList;