import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

class DogItem extends Component {
  render() {
    return (
      <div>
        <img alt={this.props.animal.name} src={this.props.animal.image} onClick= {()=> {
          this.props.selectedAnimal(this.props.animal)
          this.props.history.push(`/animals/${this.props.animal.id}`)
          }
        }/>
      </div>
    )
  }
}

// <h3> Name: {this.props.animal.name} </h3>



export default withRouter(DogItem);
