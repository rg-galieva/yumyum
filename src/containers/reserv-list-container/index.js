/**
 * Created by zesc on 3/11/17.
 */
import React, {Component} from 'react'
import ReservItem from '../../components/reserv-item'
import restaurant_list from '../../../test/db/restaurantList.json'

class ReservListContainer extends Component {
  // constructor() {
  //   super();
  //   this.state = {}
  // }

  getListItem = () => {
    return restaurant_list.map((reserv) => <ReservItem key={reserv.id} reserv={reserv}/>)
  }

   render() {
    return (
        <div>
        {this.getListItem()}
        </div>
    )
  }
}


export default ReservListContainer