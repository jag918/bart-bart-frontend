import React, { Component } from 'react'
import "../sidebar.css"
import {Link} from 'react-router-dom'
import {Grid, Row, Col} from 'react-bootstrap'

export default class SidebarExampleSidebar extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div className="sidebar">
        <Grid>
          <Row>
            <Col className="sidebar-col">
              <Link to="/">Home</Link>
            </Col>
            <Col className="sidebar-col">
              <Link to="/animals">Animal List</Link>
            </Col>
            <Col className="sidebar-col">
              <Link to="/user">Profile</Link>
            </Col>
            <Col className="sidebar-col">
              <Link to="/sign">Sign in</Link>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
