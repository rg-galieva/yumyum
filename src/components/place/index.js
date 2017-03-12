import React, {PropTypes} from 'react'

function Place(props) {
    let {id, name, pic, link, tag_list} = props.place;

    const getTagList = () => {
        return tag_list.map((tag) => <span key={tag.id}>{tag.txt}</span>)
    };

    return (
        <a href={link} target="_blank">
            <img src={pic} alt={name}/>
            <h2>{name}</h2>
            {getTagList()}
        </a>
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