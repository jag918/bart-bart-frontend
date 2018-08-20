import React, { Component } from 'react';
import './App.css';

// import NavbarContainer from './containers/navbarcontainer';
import SidebarContainer from './containers/sidebarcontainer'

class App extends Component {
  appDisplay = () => {
    return (
      <div className='app'>
      <SidebarContainer />
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
