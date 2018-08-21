import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Col} from 'react-bootstrap'

import {favoriteAnimal} from "../actions"
import "../dogdetail.css"

class DogDetail extends Component {
  state={
    animal:{
      name:"",
      email:"",
      zipCode:"",
      breed:"",
      description:"",
      image:""
    }
  }

  componentWillUpdate(nextProps, nextState) {
    const id = this.props.match.params.id
    const user_id = this.props.user.id
    let url = `http://localhost:3001//api/v1/animals/${id}`
    if(user_id){
      url += `?user_id=${this.props.user.id}`
    }
    fetch(url)
    .then(r=>r.json())
    .then(data=> {
      this.setState({
        animal: data.animal,
        animal_favorited: data.animal_favorited
      })

    })

  }
  // componentDidMount() {
  //   const id = this.props.match.params.id
  //   const user_id = this.props.user.id
  //   let url = `http://localhost:3001//api/v1/animals/${id}`
  //   if(user_id){
  //     url += `?user_id=${this.props.user.id}`
  //   }
  //   fetch(url)
  //   .then(r=>r.json())
  //   .then(data=> {
  //     this.setState({
  //       animal: data.animal,
  //       animal_favorited: data.animal_favorited
  //     })
  //
  //   })
  // }
  handleButton = () => {
    if (!!this.props.user && !this.state.animal_favorited) {
      return  <button onClick = {()=> {
        this.props.favoriteAnimal(this.state.animal, this.props.user)
        this.setState({animal_favorited:true})
      }}> Favorite </button>
    }
  }
  render() {
    return (
      <Col md={4}>
      <div className="detail">
        <img alt={this.state.animal.name} src={this.state.animal.image} />
        <h1>{this.state.animal.name}</h1>
        <p>{this.state.animal.email}</p>
        <p>{this.state.animal.zipcode}</p>
        <h3>{this.state.animal.breed}</h3>
        <p>{this.state.animal.description}</p>

        {this.handleButton()}
      </div>
      </Col>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user:state.user,
    favorites: state.favorites
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    favoriteAnimal:(data,user) => {dispatch(favoriteAnimal(data,user))}
  }
}

// export default DogDetail;
export default connect(mapStateToProps,mapDispatchToProps)(DogDetail)
