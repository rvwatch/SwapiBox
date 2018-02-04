import React, { Component } from 'react';
import Home from '../Home';
import Main from '../Main';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
       
        <div className="stars"></div>
        <div className="twinkling"></div>
        <ul className='main-nav'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/People">People</Link>
          </li>
          <li>
            <Link to="/Planets">Planets</Link>
          </li>
          <li>
            <Link to="/Vehicles">Vehicles</Link>
          </li>
          <li>
            <Link to="/Favorites">Favorites</Link>
          </li>
        </ul>
        <Main />
      </div>
    );
  }
}

export default App;
