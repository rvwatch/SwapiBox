import React, { Component } from 'react';
import { getData, apiRoot } from '../apiCalls';
import Card from '../Cards';

class Planets extends Component {
  constructor() {
    super();

    this.state = {
      planets: []
    };
  }

  async componentDidMount() {
    const data = await getData(apiRoot + 'planets');
    const planets = await this.formatData(data);

    this.setState({ planets });
  }

  async formatData({ results }) {
    console.log(results);
    
    const unresolvedPromises = results.map(async planets => {
      // let homeworld = await getData(planets.homeworld);
      // let species = await getData(planets.species);

      return {
        name: planets.name
      };
    });
    return await Promise.all(unresolvedPromises);
  }

  buildCards = data => {
    if (this.state.planets.length) {
      return data.map(planet => <Card {...planet} key={planet.name} />);
    }
  };

  render() {
    const planets = this.buildCards(this.state.planets);
    return <section className="planets-container">{planets}</section>;
  }
}

export default Planets;
