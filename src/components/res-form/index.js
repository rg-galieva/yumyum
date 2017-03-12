import React, {PropTypes, Component} from 'react'
import axios from 'axios'
import s from './_styles.css'
import Button from 'muicss/lib/react/button';
import Geosuggest from 'react-geosuggest';
import {API_POST_NEW_BOOKING, API_TOKEN} from '../../constants'

class ResForm extends Component {
    constructor() {
        super();

        this.state({
            user_id: 1,
            confirmation_number: 1234,
            date_time: "2017-03-12T11:23:01.969Z",
            party_size: 6,
            restaurant_id: 4
        })
    }

    onSubmit = (ev) => {
        if (ev) ev.preventDefault();

        axios({
            method: 'post',
            url: API_POST_NEW_BOOKING,
            headers: {'Content-Type': 'application/json', 'Authorization': API_TOKEN},
            data: {
                "booking": {
                    "user_id": 1,
                    "confirmation_number": 1234,
                    "date_time": "2017-03-12T11:23:01.969Z",
                    "party_size": 6,
                    "restaurant_id": 4
                }
            }
        }).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });

        console.log("---ResForm submitted",);
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className={s.form}>
                    <label htmlFor="location">
                        Your Location:
                        <Geosuggest />
                        {/*https://github.com/ubilabs/react-geosuggest*/}
                    </label>
                    <label htmlFor="radius-dist">
                        Radius:
                        <select name="radius-dist">
                            <option>1 mile</option>
                            <option>2 miles</option>
                            <option>3 miles</option>
                            <option>4 miles</option>
                            <option>5 miles</option>
                        </select>
                    </label>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="number" id="persons"/>
                        <label className="mdl-textfield__label" htmlFor="persons">Number of persons</label>
                    </div>
                    <label htmlFor="time_start">
                        <input type="text" name="time_start"/>
                    </label>
                    <label htmlFor="time_end">
                        <input type="text" name="time_end"/>
                    </label>
                    <label htmlFor="tags">
                        <input type="text" name="tags"/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <Button color="primary">button</Button>
            </div>
        )
    }
}

export default ResForm

