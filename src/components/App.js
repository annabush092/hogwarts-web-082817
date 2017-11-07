import React, { Component } from 'react';
import '../App.css';
import Hogs from '../porkers_data';
import Nav from './Nav';
import HogContainer from './HogContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < HogContainer hogs = {Hogs}/>
      </div>
    )
  }
}

export default App;
