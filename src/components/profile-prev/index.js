import React, {PropTypes} from 'react'

const ProfilePrev = (props) => {
    let {id, user_name, user_pic} = props;

    return (
        <div>
            <img src={user_pic} alt={user_name}/>
            <p>{user_name}</p>
        </div>
    )
}

ProfilePrev.propTypes = {
    id: PropTypes.number.isRequired,
    user_name: PropTypes.string.isRequired,
    user_pic: PropTypes.string
};
export default ProfilePrev