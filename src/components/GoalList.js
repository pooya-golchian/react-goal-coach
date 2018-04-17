import React, { Component } from 'react';
import { goalRef } from '../firebase';


class GoalList extends Component {

    componentDidMount() {
        goalRef.on('value', snap => {
          let goals = [];
          snap.forEach(goal => {
            const { email, title } = goal.val();
            const serverKey = goal.key;
            goals.push({ email, title, serverKey });
          })
          console.log('goals',goals);
        //   this.props.setGoals(goals);
        })
      }

    render() {
        return (
             <div>

            </div>
        );
      }
}
export default GoalList;
