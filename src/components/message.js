import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getMessage, getInputMessage} from "../actions"

class Message extends Component {

  componentDidMount() {
    this.props.getMessage(this.props.user.id)
  }

  render() {
    return (
      <div>
        {this.props.message.map(mes=> { return mes.content})}
        <form class="form-inline" onChange= {(e)=> {this.props.getInputMessage(e.target.value,this.props.user.id )}}>
            <i class="fa fa-search" aria-hidden="true"></i>
            <input class="form-control form-control-sm ml-3 w-100" type="text" placeholder="message" aria-label="Submit"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMessage:(data) => {dispatch(getMessage(data))},
    getInputMessage:(content, animal, user_id) => {dispatch(getInputMessage(content, user_id))}
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

  //
  // {this.props.message.map(mes => { return (mes.content)})}
