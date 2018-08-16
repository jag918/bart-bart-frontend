import React, { Component } from 'react';
import './App.css';

import Homepage from './components/homepage';
import NavbarContainer from './containers/navbarcontainer';
import DogContainer from './containers/dogcontainer';
import UserContainer from './containers/usercontainer'
import SignContainer from './containers/signcontainer'
import {Switch, Route} from 'react-router-dom'

class App extends Component {
  appDisplay = () => {
    return (
      <div className='app'>
      <NavbarContainer/>
      <Switch >
        <Route exact path ='/' component={Homepage} />
        <Route path ='/animals' component={DogContainer} />
        <Route exact path ='/sign' component={SignContainer} />
        <Route exact path ='/user' component={UserContainer} />
      </Switch>
      {/*<NavbarContainer/>
      <Homepage />
      <DogContainer />
      <UserContainer />
      <SignContainer/> */}
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        {this.appDisplay()}
      </div>
    );
  }
}

export default App;
