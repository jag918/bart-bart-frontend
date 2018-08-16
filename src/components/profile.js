import React, {Component} from 'react';
import Favorite from './favorite'

class Profile extends Component {
  render() {
    return(
      <div>
      <h1>'profile'</h1>
      <Favorite/>
      </div>
    )
  }
}

export default Profile;
