import React, {PropTypes} from 'react'
import s from './_styles.css'

const ProfilePrev = (props) => {
    let {id, user_name, user_pic} = props;

    return (
        <div className={s.upic}>
            <img src={user_pic} alt={user_name}/>
            <p className={s.uname}>{user_name}</p>
        </div>
    )
}

ProfilePrev.propTypes = {
    id: PropTypes.number.isRequired,
    user_name: PropTypes.string.isRequired,
    user_pic: PropTypes.string
};
export default ProfilePrev