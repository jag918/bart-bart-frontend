import React, {Component} from 'react';
import DogItem from './dogitem'
import Search from '../components/search';
import {Grid, Row, Col} from 'react-bootstrap'


class DogList extends Component {

  render() {
    const animalFunc =()=> {
      let threeArray=[]
      for (let i=0; i<this.props.animals.length; i+=3){
        let displayThree=this.props.animals.slice(i, i+3).map(animal => {
          return <DogItem key={animal.id} animal={animal} selectedAnimal={this.props.selectedAnimal} />;
        });
        threeArray.push(<Row>{displayThree}</Row>)
      }
      return threeArray
    }


    return (
      <Col md={8}>
        <Row>
          <h1>Select a Pet </h1>
          <Col md={4} mdOffset={8}><Search/></Col>
        </Row>
        {animalFunc()}
      </Col>
    )
  }
}

export default DogList;

// <Row className="show-grid">
// </Row>
