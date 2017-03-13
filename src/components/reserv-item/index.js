import React, {PropTypes} from 'react'
import s from './_styles.css'

const ReservItem = (props) => {
    console.log("---props.reserv", props.reserv);
    let {message, name, party_size, link} = props.reserv;

    return (
        <section className={s.card}>
            <div className={s.card_pic} style={{backgroundImage: `url(${message})`}}> </div>

            <div className={s.card_info}>
                <h2>{name}</h2>
                <p>Table for: {party_size}</p>

                <button
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                    Join
                </button>
            </div>
        </section>
    )
}

ReservItem.PropTypes = {
    message: PropTypes.string,
    name: PropTypes.string.isRequired,
    party_size: PropTypes.number.isRequired
};

export default ReservItem