import React, {PropTypes, Component} from 'react'
import axios from 'axios'
import browserHistory from '../../history'
import {connect} from 'react-redux'
import Place from '../../components/place'
import {API_POST_NEW_BOOKING, API_TOKEN, API_GET_PLACES, API_GET_GROUPS} from '../../constants'
import s from './_styles.css'
import place_list from '../../../test/db/place-list.json'

// user_id, party_size: from app store
// restaurant_id from this form
class PlaceListContainer extends Component {
    constructor() {
        super();
        this.state = {
            confirmation_number: 5555,
            date_time: "2017-03-12T11:23:01.969Z",
            party_size: 6,
            restaurant_id: 4
        }
    }

    componentDidMount() {
        let {lat, lng} = this.props;
        // axios.get(API_GET_PLACES)
        // put the result in state
    }

    onSubmit = (ev) => {
        if (ev) ev.preventDefault();

        axios({
            method: 'post',
            url: API_POST_NEW_BOOKING,
            headers: {'Content-Type': 'application/json', 'Authorization': API_TOKEN},
            data: {
                "booking": {
                    "user_id": this.props.user[0].user_id,
                    "confirmation_number": this.state.confirmation_number,
                    "date_time": this.state.date_time,
                    // "party_size": this.props.party_size,
                    "restaurant_id": this.state.restaurant_id
                }
            }
        }).then(function (response) {
            browserHistory.push('/confirm')
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });

        console.log("---ResForm submitted");
    }

    selectPlace = (id) => (ev) => {
        if (ev) ev.preventDefault()
        console.log("---id", id);

        this.setState({
            place_id: id
        });
    }

    getPlaceList() {
        // place_list = axios({
        //   method: 'get',
        //   url: API_GET_GROUPS,
        //   headers: {'Content-Type': 'application/json', 'Authorization': API_TOKEN}
        // });
        return place_list.map((place) => <Place place={place} key={place.id} onClick={this.selectPlace(place.id)}/>)
    }

    render() {
        return (
            <div className={s.place_list}>
                <div className={s.groupList}>
                    {this.getPlaceList()}
                </div>


                <div className={s.btn}>
                    <button onClick={this.onSubmit} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                        <i className="material-icons">arrow_forward
                        </i>
                    </button>
                </div>
            </div>
        );
    }

    static propTypes = {
        place_info: PropTypes.shape({
            lat: PropTypes.number,
            lng: PropTypes.number
        })
    };
}

function mapStateToProps({user}) {
    console.log("---user", user);
    return {user}
}

export default connect(mapStateToProps)(PlaceListContainer)