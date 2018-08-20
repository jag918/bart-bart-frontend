import React, {Component} from 'react';
import Favorite from './favorite'
import {connect} from 'react-redux'
import {getUser} from "../actions"

import Standing from '../media/standing.svg'
import Sitting from '../media/sitting.svg'
// import Laying from '../media/laying.svg'

class Profile extends Component {
  componentDidMount() {
    this.props.getUser(this.props.user.id)
  }
  render() {

    return(
      <div>
      <h2>{this.props.user.name}</h2>
      <h2>{this.props.user.email}</h2>
      <img className = 'sitting-img' alt='dog-sitting' src={Sitting}/>
      <img className = 'standing-img' alt='dog-standing' src={Standing}/>
      <Favorite />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (data) => {dispatch(getUser(data))}
  }
}
// export default Profile;
export default connect(mapStateToProps,mapDispatchToProps)(Profile)
