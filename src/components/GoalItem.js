import React, { Component } from 'react';
import { connect } from 'react-redux'
import { completeGoalRef , goalRef} from '../firebase';


class GoalItem extends Component {

    completeGoal() {
        const {email} = this.props.user;
        const {title, serverKey} = this.props.goal;
        // console.log('serverKey',serverKey);
        // console.log('email', email, 'title', title);
        goalRef.child(serverKey).remove();
        completeGoalRef.push({email, title});
    }

    render() {
        console.log('this.props.goal',this.props.goal)
        const {email, title} = this.props.goal
        return (
             <div>
                <strong>{title}</strong><br/>
                <span>Submitted By {email} </span>
                <button
                onClick={()=>this.completeGoal()}
                > Complete </button>
            </div>
        );
      }
}


function mapStateToProps(state) {
    const {user} = state;
    return {
        user
    }
}


export default connect(mapStateToProps, null)(GoalItem);