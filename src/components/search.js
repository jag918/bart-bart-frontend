import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getSearchAnimals} from "../actions"
import "../search.css"

class Search extends Component {

  render() {
    return (
      <div>
        <form class="form-inline" onChange= {(e)=> {this.props.getSearchAnimals(e.target.value, this.props.animals)}}>
            <i class="fa fa-search" aria-hidden="true"></i>
            <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search"/>
        </form>

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
