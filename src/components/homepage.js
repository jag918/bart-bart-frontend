import React, {Component} from 'react';
import '../homepage.css'
import DogPic from '../media/Combined Shape.svg'

class Homepage extends Component {
  render() {
    return (
      <div className='Homepage'>
        <h1>homepage</h1>
        <img style={{height:'500px'}} alt='dog-logo' src={DogPic}/>
      </div>

    )
  }
}

export default Homepage;
