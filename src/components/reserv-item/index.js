/**
 * Created by zesc on 3/11/17.
 */
import React, {PropTypes} from 'react'

const ReservItem = (props) => {
  let {rest_pic, rest_name, user_numb, link} = props.reserv;

  return (
      <div>
        <img src={rest_pic} alt={rest_name}/>
        <h2>{rest_name}</h2>
        <p>Table for: {user_numb}</p>
        <p>Topic</p>
        <a href={link}>Description</a>
        <button>JOIN</button>
      </div>
  )
}

ReservItem.PropTypes = {
  rest_pic: PropTypes.string,
  rest_name: PropTypes.string.isRequired,
  user_numb: PropTypes.number.isRequired
};

export default ReservItem