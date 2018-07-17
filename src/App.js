import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
