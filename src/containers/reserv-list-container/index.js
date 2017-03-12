import React, {Component} from 'react'
import axios from 'axios'
import ReservItem from '../../components/reserv-item'
import restaurant_list from '../../../test/db/restaurantList.json'

class ReservListContainer extends Component {
    // constructor() {
    //   super();
    //   this.state = {}
    // }
    componentDidMount(){
        new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(function(position) {
                resolve(`${position.coords.latitude},${position.coords.longitude}`)
            });
        }).then((coords) => {
            console.log("---coords", coords);
        })

    }

    getListItem = () => {
        return restaurant_list.map((reserv) => <ReservItem key={reserv.id} reserv={reserv}/>)
    }

    render() {
        return (
            <div>
                {this.getListItem()}
            </div>
        )
    }
}


export default ReservListContainer