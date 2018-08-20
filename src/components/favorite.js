import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Favorite extends Component {
  render() {
    const getFavNames=this.props.favorite.map(fav => {return <Link to = {`/animals/${fav.id}`}><img alt={fav.name} src={fav.image}/></Link>})
    return (
      <div>
        {getFavNames}
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
