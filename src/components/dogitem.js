import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {Col} from 'react-bootstrap'
import '../dogitem.css'

class DogItem extends Component {
  render() {
    return (
      <div>
        <Col xs={4} md={4}>
          <img className= "img" alt={this.props.animal.name} src={this.props.animal.image} onClick= {()=> {
            this.props.selectedAnimal(this.props.animal)
            this.props.history.push(`/animals/${this.props.animal.id}`)
            }
          }/>
        </Col>
      </div>
    )
  }
}


// <Col xs={12} md={8}>
//   <code>{'<Col xs={12} md={8} />'};</code>
// </Col>
// <Col xs={6} md={4}>
//   <code>{'<Col xs={6} md={4} />'}</code>
// </Col>

// <h3> Name: {this.props.animal.name} </h3>



export default withRouter(DogItem);
