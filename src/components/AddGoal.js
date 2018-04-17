import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

class AddGoal extends Component {
    constructor(props) {
      super(props)
      this.state = {
         title:''
      }
    }
    addGoal() {
        // console.log('this.state', this.state);
        console.log('this', this);
        const { title } = this.state;
        const { email } = this.props.user;
        goalRef.push({email,title})
    }

  render() {
    return (
      <div>
          <input
            type='text'
            placeholder='Add a goal'
            onChange={event=> this.setState({title: event.target.value})}
          />
          <button onClick={()=>this.addGoal()} >Add</button>
      </div>
    )
  }
}




function mapStateToProps(state) {
  const { user } = state;
//   console.log('state in addGoal', state);
  return {
      user
  }
}



export default connect(mapStateToProps, null)(AddGoal);