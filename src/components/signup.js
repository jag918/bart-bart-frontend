import React, {Component} from 'react'
import { connect } from 'react-redux'
import { newUser } from '../actions'

class SignUp extends Component {
  state = {
    name:'',
    email:'',
    password:''
  }

  handleChange = (e) => {
    console.log('handle', e.target.name)
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault()
  this.props.newUser(this.state)

}
  render() {
    return (
      <div>
        <form id="sign-in" onSubmit={this.handleSubmit}>
          <label htmlFor='username'>Username</label>
          <input type='text' name="name" onChange={this.handleChange}/>
          <label htmlFor='email'>Email</label>
          <input type='text' name="email" onChange={this.handleChange}/>
          <label htmlFor='password'>Password</label>
          <input type='password' name="password" onChange={this.handleChange} />
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    )
  }
}
// export default SignUp;

export default connect(null, { newUser })(SignUp)
