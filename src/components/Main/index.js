import React, { Component } from 'react';
import Home from '../Home';
import People from '../People';
import Planets from '../Planets';
import Vehicles from '../Vehicles';
import Favorites from '../Favorites';
import { Route, Switch } from 'react-router-dom';
import './Main.css';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      favorites: []
    };
  }

  setFavorites = favorite => {
    favorite.favorite = !favorite.favorite;
    const nonDuplicate = this.state.favorites.filter(
      thing => favorite.title !== thing.title
    );
    const newFavorites =
      nonDuplicate.length !== this.state.favorites.length
        ? [...nonDuplicate]
        : [...nonDuplicate, favorite];

    this.setState({ favorites: newFavorites });
  };

  render() {

    return (
      <div className='main-wrap'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/People"
            render={() => (
              <People
                setFavorites={this.setFavorites}
                favorites={this.state.favorites}
              />
            )}
          />
          <Route
            path="/Planets"
            render={() => (
              <Planets
                setFavorites={this.setFavorites}
                favorites={this.state.favorites}
              />
            )}
          />
          <Route
            path="/Vehicles"
            render={() => (
              <Vehicles
                setFavorites={this.setFavorites}
                favorites={this.state.favorites}
              />
            )}
          />
          <Route
            path="/Favorites"
            render={() => (
              <Favorites
                setFavorites={this.setFavorites}
                favorites={this.state.favorites}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Main;
