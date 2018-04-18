import React, { Component } from 'react';
import { completeGoalRef } from '../firebase';



class CompeleteGoalList extends Component {
    componentDidMount () {
        completeGoalRef.on('value', snap => {
            let compeleteGoals = [];
            snap.forEach( compeleteGoal => {
                const {email, title} = compeleteGoal.val();
                compeleteGoals.push({email, title});
            })
            console.log('completeGoals', compeleteGoals);
        })
    }
    render() {
        return(
            <div>
                salam
            </div>
        )
    }
}


export default CompeleteGoalList;

