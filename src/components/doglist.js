import React, {Component} from 'react';
import DogItem from './dogitem'
import Search from '../components/search';
import {Grid, Row} from 'react-bootstrap'


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
      <div>
         <Search/>
         <Grid>
            {animalFunc()}
         </Grid>
      </div>
    )
  }
}

export default DogList;

// <Row className="show-grid">
// </Row>
