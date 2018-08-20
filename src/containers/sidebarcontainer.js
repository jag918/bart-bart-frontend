import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import DogContainer from './dogcontainer';
import UserContainer from './usercontainer'
import SignContainer from './signcontainer'
import {Switch, Route, Link} from 'react-router-dom'
import Homepage from '../components/homepage';
import "../sidebar.css"

export default class SidebarExampleSidebar extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div>
        <Button style={{backgroundColor: "rgba(26, 91, 156, 0.0)"}} onClick={this.handleButtonClick}>Menu</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item as='a'>
              <Link to="/animals">Animal List</Link>

            </Menu.Item>
            <Menu.Item as='a'>
              <Link to="/user">Profile</Link>
            </Menu.Item>
            <Menu.Item as='a'>
              <Link to="/sign">Sign in</Link>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Switch >
                <Route exact path ='/' component={Homepage} />
                <Route path ='/animals' component={DogContainer} />
                <Route exact path ='/sign' component={SignContainer} />
                <Route exact path ='/user' component={UserContainer} />
              </Switch>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

// <Header as='h3'>Application Content</Header>
// <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
