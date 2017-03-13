import React, {Component} from 'react'
import {render} from 'react-dom'
import axios from 'axios'
import ReservItem from '../../components/reserv-item'
import {API_GET_GROUPS, API_TOKEN} from '../../constants'
import s from './_styles.css'

class ReservListContainer extends Component {

    getGroups = () => {
        return axios({
            method: 'get',
            url: API_GET_GROUPS,
            headers: {'Content-Type': 'application/json', 'Authorization': API_TOKEN}
        })
            .then((response) => {
                return response.data.map((reserv) => <ReservItem key={reserv.id} reserv={reserv}/>)
            })
            .then((group_list) => {
                render(<div className={s.groupList}>{group_list}</div>, document.getElementById('group_list'));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount() {
        // ToDo: Waiting for implementing geo search on server
        // new Promise((resolve, reject) => {
        //     navigator.geolocation.getCurrentPosition(function (position) {
        //         resolve(`${position.coords.latitude},${position.coords.longitude}`)
        //     });
        // }).then((coords) => {
        //     console.log("---coords", coords);
        // })

        this.getGroups()
    }

    getListItem = () => {
        return restaurant_list.map((reserv) => <ReservItem key={reserv.id} reserv={reserv}/>)
    }

    render() {
        return (
            <div ref="group_list" id="group_list"></div>
        )
    }
}


export default ReservListContainer