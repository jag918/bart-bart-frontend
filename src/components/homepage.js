import React, {Component} from 'react';
import '../homepage.css'
import Logo from '../media/doggo2.svg'
// import Bart from '../media/bart.png'
import {Grid, Row, Col} from 'react-bootstrap'

class Homepage extends Component {
  render() {
    return (
      <Grid className='homepage'>
        <Col md={4} style={{textAlign:"center", marginTop:"10%"}}>
          <h1 className= 'name' style={{fontSize:"70px"}}>Bart Bart</h1>
          <i className= 'name' style={{fontSize:"30px"}}>Pet Adoption App</i>
        </Col>
        <Col md={4}  style={{marginLeft:"-50px", marginTop:"-20px"}}>
            <img className = 'logo-img' alt='dog-logo' src={Logo}/>
        </Col>


      </Grid>
    )
  }
}

export default Homepage;
// <Col md={4}  style={{marginLeft:"-50px", opacity:"0.9"}}>
//     <img className = 'bart-img' alt='bart-img' src={Bart}/>
// </Col>
