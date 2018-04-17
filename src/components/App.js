import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import  AddGoal  from "./AddGoal";
import GoalList from './GoalList';
import './../App.css';

class App extends Component {
  signOut() {
      firebaseApp.auth().signOut();
  }
  render() {
    return (
         <div>
           <h3>Goals</h3>
            <AddGoal />
            <GoalList />
            <button onClick={ () => this.signOut() }>SignOut</button>
        </div>
    );
  }
}
function mapDispatchToProps(state) {
  // console.log('state', state);
  return { }
}
export default connect(mapDispatchToProps, null)(App);
