import React, {Component} from 'react';


class DogDetail extends Component {
  render() {
    return (
      <div>
        <img alt={this.props.animal.name} src={this.props.animal.image} />
        <h1>{this.props.animal.name}</h1>
        <h3>{this.props.animal.breed}</h3>
        <p>{this.props.animal.description}</p>


      </div>
    )
  }
}

export default DogDetail;
