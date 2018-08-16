import React, {Component} from 'react';
import DogDetail from '../components/dogdetail';

import DogList from '../components/doglist';

import {getAnimals,selectedAnimal, favoriteAnimal} from "../actions"
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'

class DogContainer extends Component {

  componentDidMount() {
    this.props.getAnimals()
  }

  displayPage = () => {
    return (
    <Switch>
      <Route exact path = '/animals'
      render={(props)=> <DogList {...props} animals={this.props.animals} selectedAnimal={this.props.selectedAnimal} /> }/>
      <Route path='/animals/:id' render={(props)=> <DogDetail {...props} animal={this.props.animal} favoriteAnimal={this.props.favoriteAnimal}/>}/>
    </Switch>
  )}

  render() {
    return (
      <div>
        {this.displayPage()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    animals: state.animals,
    animal: state.animal,
    favorite: state.favorite
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAnimals:(data) => {dispatch(getAnimals(data))},
    selectedAnimal: animal => {dispatch(selectedAnimal(animal))},
    handleSearchChange: searched => {dispatch()},
    favoriteAnimal: animal => {dispatch(favoriteAnimal(animal))}
  }
}

// export default DogContainer;
export default connect(mapStateToProps,mapDispatchToProps)(DogContainer)
