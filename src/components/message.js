import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getMessage} from "../actions"

class Message extends Component {

  componentDidMount() {
    this.props.getMessage(this.props.user.id)
  }

  render() {
    console.log('mesage',this.props)
    return (
      <div>hi</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMessage:(data) => {dispatch(getMessage(data))}
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    message: state.message
  }
}
// export default Message;

export default connect(mapStateToProps,mapDispatchToProps)(Message)
