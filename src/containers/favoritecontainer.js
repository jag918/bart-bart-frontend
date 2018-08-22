import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Switch, Route,Link} from 'react-router-dom'
import {Grid, Row, Col} from 'react-bootstrap'
import "../dogitem.css"
import Favorite from "../components/favorite"


class FavoriteContainer extends Component {
  render() {
    const getFavNames =()=> {
      let threeArray=[]
      for (let i=0; i<this.props.favorite.length; i+=3){
        let displayThree=this.props.favorite.slice(i, i+3).map(fav => {
          return <Favorite key={fav.id} favorite={fav}/>
        });
        threeArray.push(<Row> {displayThree} </Row>)
      }
      return threeArray
    }
    return (
      <div>
      <Col md={8}>
        {getFavNames()}
      </Col>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favorite: state.favorite,
    user: state.user
  }
}


// export default Favorite;
export default connect(mapStateToProps)(FavoriteContainer)
