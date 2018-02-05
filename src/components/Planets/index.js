import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getData, apiRoot, cleanPlanetData } from '../apiCalls';
import Card from '../Cards';
import './Planets.css';

class Planets extends Component {
  constructor() {
    super();

    this.state = {
      planets: []
    };
  }

  async componentDidMount() {
    const data = await getData(apiRoot + 'planets');
    const planets = await cleanPlanetData(data);
    this.setState({ planets });
  }

  buildCards = data => {
    if (this.state.planets.length) {
      return data.map((planet, index) => (
        <Card
          type="planet"
          setFavorites={this.props.setFavorites}
          favoriteArray={this.props.favorites}
          selected={planet}
          {...planet}
          key={index}
        />
      ));
    }
  };

  render() {
    const planets = this.buildCards(this.state.planets);
    return <section className="planets-container">{planets}</section>;
  }
}

Planets.propTypes = {
  setFavorites: PropTypes.func,
  favorites: PropTypes.array
};

export default Planets;
