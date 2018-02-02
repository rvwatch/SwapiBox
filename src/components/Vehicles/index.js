import React, { Component } from 'react';
import { getData, apiRoot } from '../apiCalls';
import Card from '../Cards';

class Vehicles extends Component {
  constructor() {
    super();

    this.state = {
      vehicles: []
    };
  }

  async componentDidMount() {
    const data = await getData(apiRoot + 'vehicles');
    const vehicles = await this.formatData(data);

    this.setState({ vehicles });
  }

  async formatData({ results }) {
    const unresolvedPromises = results.map(async vehicle => {
      //let homeworld = await getData(vehicle.homeworld);
      //let species = await getData(vehicle.species);
      
      return {
        title: vehicle.name,
        data1: vehicle.model,
        data2: vehicle.vehicle_class,
        data3: vehicle.passengers
      };
    });
    return await Promise.all(unresolvedPromises);
  }

  buildCards = data => {
    if (this.state.vehicles.length) {
      return data.map((vehicle, index) => (
        <Card type="vehicle" setFavorites={this.props.setFavorites} {...vehicle} key={index} />
      ));
    }
  };

  render() {
    const vehicle = this.buildCards(this.state.vehicles);
    return <section className="vehicles-container">
      {vehicle}
    </section>;
  }
}

export default Vehicles;