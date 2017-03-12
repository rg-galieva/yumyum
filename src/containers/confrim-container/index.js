import React, {PropTypes, Component} from 'react'


class ConfirmContainer extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        let {} = this.props;


        return (
            <div>
                <h2>Congratulations,<br/>You are confirmed!</h2>
                <img src="#"/>
                <h3>Name of Restaurant</h3>
                <ul>list of users</ul>
            </div>
        );
    }
}

export default ConfirmContainer;