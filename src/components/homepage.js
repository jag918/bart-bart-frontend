import React, {Component} from 'react';
import '../homepage.css'

import Standing from '../media/standing.svg'
import Sitting from '../media/sitting.svg'
import Laying from '../media/laying.svg'


class Homepage extends Component {
  render() {
    return (
      <div className='homepage'>
        <h1 className= 'header'>Bart Bart</h1>
      </div>

    )
  }
}

export default Homepage;

// <img className = 'laying-img' alt='dog-laying' src={Laying}/>
// <img className = 'sitting-img' alt='dog-sitting' src={Sitting}/>
// <img className = 'standing-img' alt='dog-standing' src={Standing}/>
