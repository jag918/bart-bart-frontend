import React, { Component } from 'react'
import "../sidebar.css"
import {Link} from 'react-router-dom'
import {Grid, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'

class SidebarExampleSidebar extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  userDisplay=() => {
    if (this.props.user) {

    } else {
      return( <Col className="sidebar-col">
                <Link to="/sign">Sign in</Link>
              </Col>
            )
    }
  }

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
            {this.userDisplay()}
          </Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user:state.user
  }
}


export default connect(mapStateToProps)(SidebarExampleSidebar)
