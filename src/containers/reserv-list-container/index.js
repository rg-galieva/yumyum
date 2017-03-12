import React, {Component} from 'react'

import axios from 'axios'
import ReservItem from '../../components/reserv-item'
import restaurant_list from '../../../test/db/restaurantList.json'
import {API_GET_GROUPS, API_TOKEN} from '../../constants'

class ReservListContainer extends Component {
    // constructor() {
    //   super();
    //   this.state = {}
    // }

    componentDidMount() {
        // ToDo Use Reducers & Actions + save data
        new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve(`[{'lat':${position.coords.latitude}}, {'lng': ${position.coords.longitude}}]`)
            });
        }).then((coords) => {
            axios({
                method: 'get',
                url: API_GET_GROUPS,
                headers: {'Content-Type': 'application/json', 'Authorization': API_TOKEN},
            }).then(function (response) {
                console.log("response", response);
                let places = response.data.map((reserv) => <ReservItem key={reserv.id} reserv={reserv}/>);
                // this.refs.list_items = places
            })
            .catch(function (error) {
                console.log(error);
            });
        });
    }

    getListItem = () => {
        return restaurant_list.map((reserv) => <ReservItem key={reserv.id} reserv={reserv}/>)
    }

    render() {
        return (
            <div ref="list_items">
                {this.getListItem()}
            </div>
        )
    }
}

export default ReservListContainer