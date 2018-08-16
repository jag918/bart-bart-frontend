import React, {Component} from 'react';
import { connect } from 'react-redux'
import { existingUser } from '../actions'


class SignIn extends Component {
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
  this.props.existingUser(this.state)

}

  render() {
    return (
      <div>
        <form id="sign-in" onSubmit={this.handleSubmit}>
          <label htmlFor='name'>name</label>
          <input type='text' name="name" onChange={this.handleChange}/>
          <label htmlFor='email'>Email</label>
          <input type='text' name="email" onChange={this.handleChange} />
          <label htmlFor='password'>Password</label>
          <input type='password' name="password" onChange={this.handleChange} />
          <button type='submit'>Sign In</button>
        </form>
      </div>
    )
  }
}
// export default SignIn;
export default connect(null, { existingUser })(SignIn)
