import React, {Component} from 'react';
import SignIn from '../components/signin'
import SignUp from '../components/signup'

class SignContainer extends Component {
  render() {
    return (
      <div>
        <SignIn/>
        <SignUp />
      </div>
    )
  }
}
export default SignContainer ;
