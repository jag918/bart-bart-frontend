import React, {Component} from 'react';
import { connect } from 'react-redux'
import { changeHobbit } from '../actions'

class SignIn extends Component {
  render() {
    return (
      <div>
        <form id="sign-in">
          <label htmlFor='username'>Username</label>
          <input type='text' name="name" />
          <label htmlFor='email'>Email</label>
          <input type='text' name="email" />
          <label htmlFor='password'>Password</label>
          <input type='password' name="password"  />
          <button type='submit'>Sign In</button>
        </form>
      </div>
    )
  }
}
export default SignIn;
