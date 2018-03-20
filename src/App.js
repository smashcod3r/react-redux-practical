import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import store from './store';

class App extends Component {
  render() {
    return <Counter store={store} />;
  }
}

export default App;
