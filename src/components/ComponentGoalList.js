import React, { Component } from 'react';
import {connect } from 'react-redux';
import { setCompleted } from "../actions";
import { completeGoalRef } from '../firebase';


class CompeleteGoalList extends Component {

    componentDidMount () {
        completeGoalRef.on('value', snap => {
            let completeGoals = [];
            snap.forEach( completeGoal => {
                const {email, title} = completeGoal.val();
                completeGoals.push({email, title});
            })
            console.log('completeGoals', completeGoals);
            this.props.setCompleted(completeGoals);
        })
    }


    clearCompleted() {
        completeGoalRef.set([]);
    }


    render() {
        console.log('this.props.completeGoals', this.props.completeGoals);

        return(
            <div>
                {this.props.completeGoals.map( (completeGoal, i) => {
                        const {email , title} = completeGoal;
                        return (
                            <div key={i}>
                                <strong>{title}</strong>
                                <em>{email}</em>
                            </div>
                        )
                })}
                <button onClick={()=>this.clearCompleted()}>Clear All</button>
            </div>
        )
    }
}



function mapStateToProps(state) {
    const {completeGoals} = state;
    return {completeGoals}
}



export default connect(mapStateToProps, {setCompleted})(CompeleteGoalList);

