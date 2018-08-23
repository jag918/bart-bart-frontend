import React, {Component} from 'react';
import FavoriteContainer from '../containers/favoritecontainer'
import {connect} from 'react-redux'
import {getUser} from "../actions"
import {withRouter,Switch, Route} from 'react-router-dom'

import Standing from '../media/standing.svg'
import Sitting from '../media/sitting.svg'
import DogDetail from '../components/dogdetail';
import Message from './message';

class Profile extends Component {

  componentDidMount() {
    this.props.getUser(this.props.user.id)
  }

  render() {

    return(
      <div style={{marginTop:"30px"}}>
        <h2 style={{fontSize:"36px"}}>Hello {this.props.user.name}!</h2>
        <h4>Email: {this.props.user.email}</h4>
        <i>Here are the pets you favorited</i>
        <FavoriteContainer />
        <Message/>
        <Switch>
          <Route path='/user/detailanimals/:id' key="profile-detail" render={(props)=> <DogDetail {...props} />}/>
        </Switch>
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
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Profile))


// <Route path='/user/messages' key="profile-message" render={()=> <Message />}/>
