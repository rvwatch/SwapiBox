import React, { Component } from 'react';
import Main from '../Main';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='app-wrap'>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <ul className='main-nav'>
          <li className='title'>
            <Link to="/">SWAPI BOX</Link>
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
