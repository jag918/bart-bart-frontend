import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getSearchAnimals} from "../actions"
import "../search.css"

class Search extends Component {

  render() {
    return (
      <div>
        <input className="search" onChange= {(e)=> {this.props.getSearchAnimals(e.target.value, this.props.animals)}} type="text" placeholder={"search animals by name or breed"}  />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    animals: state.animals
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchAnimals:(animals,searched) => {dispatch(getSearchAnimals(animals,searched))}
  }
}

// export default Search;
export default connect(mapStateToProps,mapDispatchToProps)(Search)
