import React, {Component} from 'react'
import {connect} from 'react-redux'

class Favorite extends Component {
  render() {
    return (
      <div>
        <h1>'Favorite'</h1>
        <h2>{this.props.user.name}</h2>
        <h2>{this.props.favorite}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    favorite: state.favorite,
    user: state.user
  }
}


// export default Favorite;
export default connect(mapStateToProps)(Favorite)
