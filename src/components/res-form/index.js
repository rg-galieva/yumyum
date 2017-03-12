import React, {PropTypes, Component} from 'react'
import axios from 'axios'
import browserHistory from '../../history'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import s from './_styles.css'
import Button from 'muicss/lib/react/button';
import Geosuggest from 'react-geosuggest';
import {API_POST_NEW_BOOKING, API_TOKEN} from '../../constants'

class ResForm extends Component {
    constructor() {
        super();

        this.state = {
            confirmation_number: 1234,
            date_time: "2017-03-12T11:23:01.969Z",
            party_size: "Party size",
            restaurant_id: 4
        }
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
                    "confirmation_number": 1234,
                    "date_time": "2017-03-12T11:23:01.969Z",
                    "party_size": 6,
                    "restaurant_id": 4
                }
            }
        }).then(function (response) {
            console.log(response);
            browserHistory.push('/places')
        }).catch(function (error) {
                console.log(error);
            });

        console.log("---ResForm submitted",);
    }

    handleInputChange = (ev) => {
        const target = ev.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        console.log("---user_id ", this.props.user[0].user_id);

        return (
            <div>
                <form onSubmit={this.onSubmit} className={s.form}>
                    
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <label className="mdl-textfield__label" for="sample0">Find Restaurants</label>
                        <Geosuggest placeholder="tacos, cheap dinners, etc " inputClassName="mdl-textfield__input"/>
                        {/*https://github.com/ubilabs/react-geosuggest*/}
                    </div>
                    <label htmlFor="radius-dist">
                       
                        
                    </label>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <label className="mdl-textfield__label" for="sample0">Find Restaurants</label>
                        <select name="radius-dist" className="mdl-textfield__input" style={{ margin: "100 0"}}>
                            <option>1 mile</option>
                            <option>2 miles</option>
                            <option>3 miles</option>
                            <option>4 miles</option>
                            <option>5 miles</option>
                        </select>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="number" id="party_size"/>
                        <label className="mdl-textfield__label" htmlFor="party_size" onChange={this.handleInputChange}>{this.state.party_size}</label>
                    </div>

                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <label className="mdl-textfield__label" for="sample3">Start time</label>
                        <input className="mdl-textfield__input" type="time" id="sample1" placeholder="none"/>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <label className="mdl-textfield__label" for="sample3">End time</label>
                        <input className="mdl-textfield__input" type="time" id="sample2" placeholder="none"/>
                    </div>

                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <label className="mdl-textfield__label" for="sample3">Interest</label>
                        <input className="mdl-textfield__input" type="text" id="sample3" placeholder="Rails, React, Redux"/>
                        
                    </div>
    
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" style={{ float: 'right'}}>
                      Confirm
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({user}) {
    return {user}
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({fetchWeather}, dispatch)
// }

export default connect(mapStateToProps)(ResForm)