import React, {Component} from 'react';
import '../homepage.css'
import Logo from '../media/doggo2.svg'



class Homepage extends Component {
  render() {
    return (
      <div className='homepage'>
        <h1 className= 'header'>Bart Bart</h1>
        <i className= 'header'>Pet Adoption App</i>
        <img className = 'logo-img' alt='dog-logo' src={Logo}/>
      </div>

    )
  }
}

export default Homepage;
