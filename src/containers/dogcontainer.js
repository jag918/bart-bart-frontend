import React, {Component} from 'react';
import DogDetail from '../components/dogdetail';

import DogList from '../components/doglist';

import {getAnimals,selectedAnimal} from "../actions"
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
      render={(props)=> <DogList {...props} animals={this.props.animals} selectedAnimal={this.props.selectedAnimal}/> }/>
      <Route path='/animals/:id' render={(props)=> <DogDetail {...props} animal={this.props.animal} />}/>
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
  console.log("state dog list",state)
  return {
    animals: state.animals,
    animal: state.animal
  }
}
//
// const mapStateToProps = (state, ownProps) => {
//   console.log('dog item state', state.selectedAnimal)
//   console.log('dog item own props', ownProps)
//   const selected = state.selectedAnimal.id === ownProps.animal.id
//   return {
//     selected
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    getAnimals:(data) => {dispatch(getAnimals(data))},
    selectedAnimal: animal => {dispatch(selectedAnimal(animal))}
  }
}

// export default DogContainer;
export default connect(mapStateToProps,mapDispatchToProps)(DogContainer)
