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
    const unresolvedPromises = results.map(async planet => {
      const residentData = await this.getResidentData(planet.residents);

      return {
        title: planet.name,
        data1: `Terrain: ${planet.terrain}`,
        data2: `Population: ${planet.population}`,
        data3: `Climate: ${planet.climate}`,
        data4: `Resident: ${residentData}`
      };
    });
    return await Promise.all(unresolvedPromises);
  }

  async getResidentData(urls) {
    const unresolvedPromises = urls.map(async url => {

      const data = await getData(url);
      
      return data.name;
    });
    return await Promise.all(unresolvedPromises);
  }

  buildCards = data => {
    if (this.state.planets.length) {
      return data.map((planet, index) => (
        <Card
          type="planet"
          setFavorites={this.props.setFavorites}
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

export default Planets;
