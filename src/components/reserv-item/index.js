import React, {PropTypes} from 'react'
import s from './_styles.css'

const ReservItem = (props) => {
    let {rest_pic, rest_name, user_numb, link} = props.reserv;

    return (

        <section className={s.card}>

            <div className={s.card_pic}>
                <img src={rest_pic} alt={rest_name}/>
            </div>


            <div className={s.card_info}>
                <h2>{rest_name}</h2>
                <p>Table for: {user_numb}</p>
                <p>Topic</p>
                <a href={link}>Description</a>
                <div className={s.tags}>
                    <span className="mdl-chip">
                         <span className="mdl-chip__text">Basic Chip</span>
                    </span>
                    <span className="mdl-chip">
                         <span className="mdl-chip__text">Basic Chip</span>
                    </span>
                    <span className="mdl-chip">
                         <span className="mdl-chip__text">Basic Chip</span>
                    </span>
                </div>

                <button
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                    Join
                </button>
            </div>
        </section>
    )
}

ReservItem.PropTypes = {
    rest_pic: PropTypes.string,
    rest_name: PropTypes.string.isRequired,
    user_numb: PropTypes.number.isRequired
};

export default ReservItem