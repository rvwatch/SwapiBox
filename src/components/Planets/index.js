import React, { Component } from 'react';
import { getData, apiRoot, cleanPlanetData } from '../apiCalls';
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
    const planets = await cleanPlanetData(data);
    this.setState({ planets });
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
