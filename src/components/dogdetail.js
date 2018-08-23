import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Col} from 'react-bootstrap'

import {favoriteAnimal, unfavoriteAnimal} from "../actions"
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

  getAnimalDetails(id, user_id){
    let url = `http://localhost:3001//api/v1/animals/${id}`
    if(user_id){
      url += `?user_id=${this.props.user.id}`
    }
    return fetch(url).then(r=>r.json())
  }

  componentDidMount(){
    const id = this.props.match.params.id
    const user_id = this.props.user.id
    this.getAnimalDetails(id, user_id).then(data=> {
      this.setState({
        animal: data.animal,
        animal_favorited: data.animal_favorited
      })

    })
  }

  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.id
    const user_id = nextProps.user.id
    this.getAnimalDetails(id, user_id).then(data=> {
      this.setState({
        animal: data.animal,
        animal_favorited: data.animal_favorited
      })

    })
  }

  handleButton = () => {
    if (!!this.props.user && !this.state.animal_favorited) {
      return  <button onClick = {()=> {
        this.props.favoriteAnimal(this.state.animal, this.props.user)
        this.setState({animal_favorited:true})
      }}> Favorite </button>
    }
  }

  handleDeleteButton = () => {
    if (!!this.props.user && this.state.animal_favorited) {
      return <button onClick={()=>{
        this.props.unfavoriteAnimal(this.state.animal,this.props.user)
        this.setState({animal_favorited:false})
        this.props.history.goBack()
      }}>Unfavorite</button>
    }
  }
  render() {
    return (
      <Col md={4} style={{position:"sticky", top:"0", marginBottom:"10%"}}>
      <div className="detail">
        <img alt={this.state.animal.name} src={this.state.animal.image} />
        <h1>{this.state.animal.name}</h1>
        <p>email: {this.state.animal.email}</p>
        <p>zipcode: {this.state.animal.zipcode}</p>
        <h3>{this.state.animal.breed}</h3>
        <p>{this.state.animal.description}</p>

        {this.handleButton()}
        {this.handleDeleteButton()}

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
    favoriteAnimal:(data,user) => {dispatch(favoriteAnimal(data,user))},
    unfavoriteAnimal:(data,user) => {dispatch(unfavoriteAnimal(data,user))}
  }
}

// export default DogDetail;
export default connect(mapStateToProps,mapDispatchToProps)(DogDetail)
