import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getData, apiRoot, cleanVehicleData } from '../apiCalls';
import Card from '../Cards';
import './Vehicles.css';

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
          favoriteArray={this.props.favorites}
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

Vehicles.propTypes = {
  setFavorites: PropTypes.object,
  favorites: PropTypes.array
};

export default Vehicles;
