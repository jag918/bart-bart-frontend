import React, {Component} from 'react';
import DogDetail from '../components/dogdetail';
import DogList from '../components/doglist';
import {getAnimals,selectedAnimal, favoriteAnimal} from "../actions"
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import {Row, Grid} from 'react-bootstrap'

class DogContainer extends Component {

  componentDidMount() {
    this.props.getAnimals()
  }

  selectedAnimalFunc = () => {
    if (this.props.searchAnimals.length>0) {
      return this.props.searchAnimals
    } else {
      return this.props.animals
    }
  }

  displayPage = () => {
    return (
      <Row>
        <DogList animals={this.selectedAnimalFunc()} selectedAnimal={this.props.selectedAnimal} />
        <Switch>
          <Route path='/animals/:id' render={(props)=> <DogDetail {...props} favoriteAnimal={this.props.favoriteAnimal}/>}/>
        </Switch>
      </Row>
  )}
  // <Route exact path = '/animals'
  // render={(props)=> <DogList {...props} animals={this.selectedAnimalFunc()} selectedAnimal={this.props.selectedAnimal} /> }/>


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
    favorite: state.favorite,
    searchAnimals:state.searchAnimals
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAnimals:(data) => {dispatch(getAnimals(data))},
    selectedAnimal: animal => {dispatch(selectedAnimal(animal))},
    handleSearchChange: searched => {dispatch()},
    favoriteAnimal: (animal, user) => {dispatch(favoriteAnimal(animal,user))}
  }
}

// export default DogContainer;
export default connect(mapStateToProps,mapDispatchToProps)(DogContainer)
