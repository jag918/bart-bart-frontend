import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {Col} from 'react-bootstrap'
import '../dogitem.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectedAnimal} from "../actions"

class Favorite extends Component {
  render() {
    return (
        <Col className= "dog-col" xs={4} md={4}>
          <img className= "img" alt={this.props.favorite.name} src={this.props.favorite.image} onClick= {()=> {
            this.props.selectedAnimal(this.props.favorite)
            this.props.history.push(`/user/detailanimals/${this.props.favorite.id}`)
            }
          }/>
        </Col>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectedAnimal: animal => {dispatch(selectedAnimal(animal))}
  }
}

export default withRouter(connect(null,mapDispatchToProps)(Favorite));



// <Link to = {`/user/detailanimals/${this.props.favorite.id}`}> <img className= "img" alt={this.props.favorite.name} src={this.props.favorite.image}/></Link>
