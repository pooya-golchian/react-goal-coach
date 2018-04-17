import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router';

class SignUp extends Component {
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

  SignUp() {
    console.log('this.state', this.state);
    const {email ,password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch (error => {
      // console.log('error', error);
      this.setState({error});
    })
  }

  render() {
    return (
      <div className="signup">
        <div>{this.state.error.message}</div>
        <h1>SignUp</h1>
        <input type="text"
         placeholder="email"
         onChange={event => this.setState({email: event.target.value})}
         />
        <input type="password"
         placeholder="password"
         onChange={event => this.setState({password: event.target.value})}
         />
        <button type="button" onClick={() => this.SignUp() } >SignUp</button>
        <div><Link to={'/signin'}>Already a user? Sign in instead</Link></div>
      </div>
    );
  }
}

export default SignUp;
