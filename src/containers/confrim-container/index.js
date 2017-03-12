import React, {PropTypes, Component} from 'react'
import s from './_styles.css'

class ConfirmContainer extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        let {} = this.props;


        return (
        <div className="demo-card-wide mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">Congratulations</h2>
            </div>
            <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    Your confirmed!
                </a>
            </div>
            <div className="mdl-card__menu">
                <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                    <i className="material-icons">share</i>
                </button>
            </div>
        </div>
            
            // <div className={s.confirm}>
            //     <h2>Congratulations!</h2>
            //     <div>
            //         <img src="https://s3-media2.fl.yelpcdn.com/bphoto/16VSfrgwjDy-qkVMAfkMIQ/o.jpg"/>
            //     </div>
            //
            //     <h3>Name of Restaurant</h3>
            //     <ul>list of users</ul>
            // </div>
        );
    }
}

export default ConfirmContainer;