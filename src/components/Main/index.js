import React, { Component } from 'react';
import Home from '../Home';
import People from '../People';
import Planets from '../Planets';
import Vehicles from '../Vehicles';
import Favorites from '../Favorites';
import { Route, Switch } from 'react-router-dom';


class Main extends Component {
  constructor(){
    super();
    this.state = {
      favorites: []
    };
  }

  setFavorites = (data) => {
    this.setState({
      favorites: data
    });
  }

  render() {
    return (
      <div className={'main-wrap'}>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path='/People'  render={() => (<People setFavorites={this.setFavorites} favorites={this.state.favorites} />)} />
          <Route path='/Planets' render={() => (<Planets />)} />
          <Route path='/Vehicles' render={() => (<Vehicles />)} />
          <Route path='/Favorites' render={() => (<Favorites />)} />
        </Switch>
      </div>
    );
  }
}

export default Main;