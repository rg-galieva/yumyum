import React, {PropTypes, Component} from 'react'
import ProfilePrev from '../../components/profile-prev'
import axios from 'axios'
import user_json from '../../../test/db/user.json'

import {API_USER} from '../../constants'

class ProfilePrevContainer extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        // axios.get(API_USER)

    }

    render() {
        let {id, user_name, user_pic} = user_json;


        return (
            <ProfilePrev id={id} user_name={user_name} user_pic={user_pic}/>
        );
    }

    // static propTypes = {
    //     : PropTypes..isRequired
    // };

}

export default ProfilePrevContainer;