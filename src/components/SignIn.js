import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link} from 'react-router';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      error: {
        message:''
      }
    }
  }

  SignIn() {
    console.log('this.state', this.state);
    const {email ,password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .catch (error => {
      // console.log('error', error);
      this.setState({error});
    })
  }

  render() {
    return (
      <div className="SignIn">
        <div>{this.state.error.message}</div>
        <h1>SignIn</h1>
        <input type="text"
         placeholder="email"
         onChange={event => this.setState({email: event.target.value})}
         />
        <input type="password"
         placeholder="password"
         onChange={event => this.setState({password: event.target.value})}
         />
        <button type="button" onClick={() => this.SignIn() } >SignIn</button>
        <div><Link to={'/signup'}>Sign up instead</Link></div>
      </div>
    );
  }
}

export default SignIn;
