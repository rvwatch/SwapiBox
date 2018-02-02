import React, { Component } from 'react';
import Home from '../Home';
import Main from '../Main';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      people: []
    };
  }

  render() {
    return (
      <div>
        
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/People'>People</Link></li>
          <li><Link to='/Planets'>Planets</Link></li>
          <li><Link to='/Vehicles'>Vehicles</Link></li>
        </ul> 
       <Main  />
      </div>
    );
  }
}

export default App;
