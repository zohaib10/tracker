import React, { Component } from 'react';

import Navbar from './Components/Navbar';
import Add from './Components/Add';
import Show from './Components/Show';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Add />
        <Show />
      </div>
    );
  }
}

export default App;
