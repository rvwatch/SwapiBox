import React, { Component } from 'react';
import { getData, apiRoot, cleanVehicleData } from '../apiCalls';
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
    const vehicles = await cleanVehicleData(data);
    this.setState({ vehicles });
  }

  buildCards = data => {
    if (this.state.vehicles.length) {
      return data.map((vehicle, index) => (
        <Card
          type="vehicle"
          setFavorites={this.props.setFavorites}
          selected={vehicle}
          {...vehicle}
          key={index}
        />
      ));
    }
  };

  render() {
    const vehicle = this.buildCards(this.state.vehicles);
    return <section className="vehicles-container">{vehicle}</section>;
  }
}

export default Vehicles;
