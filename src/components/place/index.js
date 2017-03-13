import React, {PropTypes} from 'react'
import s from './_styles.css'

function Place(props) {
    let {id, name, pic, link, tag_list} = props.place;

    const getTagList = () => {
        return tag_list.map((tag) => <span key={tag.id} className="mdl-chip__text"><span
            className="mdl-chip__text">{tag.txt}</span></span>)
    };

    const redirect = (link) => {

    }

    return (
        <section className={s.card}>
            <div className={s.card_pic} style={{backgroundImage: `url(${pic})`}}></div>

            <div className={s.card_info}>
                <h2>{name}</h2>

                <button
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                    Select
                </button>
            </div>
        </section>
    );
}

Place.propTypes = {
    place: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        pic: PropTypes.string,
        link: PropTypes.string,
        tag_list: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            txt: PropTypes.string
        }))
    })
};

export default Place;