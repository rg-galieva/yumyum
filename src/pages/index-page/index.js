import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import ReservListContainer from '../../containers/reserv-list-container'
import s from './_styles.css'

function MainPage() {
    return (
        <div className={s.index}>
            <ReservListContainer/>

            <Link to="/new-res" className={s.new_res}>
                <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                    <i className="material-icons">add</i>
                </button>
            </Link>
        </div>
    );
}


export default MainPage;

