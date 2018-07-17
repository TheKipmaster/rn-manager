import firebase from 'firebase';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/index';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyALs9R09KQBFxbFQTYUvYVCHrK5UgjmwZU',
      authDomain: 'manager-48d04.firebaseapp.com',
      databaseURL: 'https://manager-48d04.firebaseio.com',
      projectId: 'manager-48d04',
      storageBucket: 'manager-48d04.appspot.com',
      messagingSenderId: '451271915684'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
