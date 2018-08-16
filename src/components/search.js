import React, {Component} from 'react';
// import {connect} from 'react-redux'
// import {handleSearchChange} from "../actions"

class Search extends Component {


  render() {
    return (
      <div>
        <input type="text" name="description" placeholder={"Search Animals"}
        />
      </div>
    )
  }
}


export default Search;


// export default connect(null,mapDispatchToProps)(Search)
