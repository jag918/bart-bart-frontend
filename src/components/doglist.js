import React, {Component} from 'react';
import DogItem from './dogitem'
import Search from '../components/search';


class DogList extends Component {

  render() {
    console.log("doglist props",this.props)
    const AnimalFunc = this.props.animals.map(animal => {
      return <DogItem key={animal.id} animal={animal} selectedAnimal={this.props.selectedAnimal}/>;
    });
    return (
      <div>
         <Search/>
        {AnimalFunc}
      </div>
    )
  }
}

export default DogList;
