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
        <section className={s.card} onClick={redirect(link)}>
            <div className={s.card_pic}>
                <img src={pic} alt={name}/>
            </div>

            <div className={s.card_info}>
                <h2>{name}</h2>
                <p>Table for: 4</p>
                <p>Topic</p>
                <p>Description</p>
                <div className={s.tags}>
                    {getTagList()}
                </div>


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