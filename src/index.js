import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {firebaseApp} from './firebase';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged( user => {
    if (user) {
        console.log('User has signed in or up', user);
        browserHistory.push('/app');
    } else {
        console.log('User has signed out or still need to signin');
        browserHistory.replace('/signin');
    }
});


ReactDOM.render(
    <Provider store={store}>
        <Router path="/" history={browserHistory}>
            <Route path="/app" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </Router>
    </Provider>,document.getElementById('root'));
registerServiceWorker();







