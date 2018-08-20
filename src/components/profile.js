import React, {Component} from 'react';
import Favorite from './favorite'
import {connect} from 'react-redux'
import {getUser} from "../actions"

class Profile extends Component {
  componentDidMount() {
    this.props.getUser(this.props.user.id)
  }
  render() {

    return(
      <div>
      <h2>{this.props.user.name}</h2>
      <h2>{this.props.user.email}</h2>
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
