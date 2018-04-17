import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import './../App.css';

class App extends Component {


  signOut() {
      firebaseApp.auth().signOut();
  }

  render() {
    return (
         <div>
            <div className="App">App</div>
            <button onClick={ () => this.signOut() }>SignOut</button>
        </div>
    );
  }
}

export default App;
