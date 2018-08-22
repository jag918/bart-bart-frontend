import React, { Component } from 'react';
import './App.css';
import DogContainer from './containers/dogcontainer';
import UserContainer from './containers/usercontainer'
import SignContainer from './containers/signcontainer'
import {Switch, Route, Link} from 'react-router-dom'
import Homepage from './components/homepage';
import {Row, Col} from 'react-bootstrap'

// import NavbarContainer from './containers/navbarcontainer';
import SidebarContainer from './containers/sidebarcontainer'

class App extends Component {
  appDisplay = () => {
    return (
      <div className='app'>
      <Row>
      <Col style={{position:"sticky", top:"0"}} md={2}>
      <SidebarContainer />
      </Col>
      <Col md={10}>
      <Switch >
        <Route exact path ='/' component={Homepage} />
        <Route path ='/animals' component={DogContainer} />
        <Route exact path ='/sign' component={SignContainer} />
        <Route path ='/user' component={UserContainer} />
      </Switch>
      </Col>
      </Row>

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
