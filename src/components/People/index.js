import React, { Component } from 'react';
import { getData, apiRoot } from '../apiCalls';
import Card from '../Cards';

class People extends Component {
  constructor() {
    super();

    this.state = {
      people: []
    };
  }

  async componentDidMount() {
    const data = await getData(apiRoot + 'people');
    const people = await this.formatData(data);

    this.setState({ people });
  }

  async formatData({ results }) {
    const unresolvedPromises = results.map(async people => {
      let homeworld = await getData(people.homeworld);
      let species = await getData(people.species);

      return {
        title: people.name,
        data1: `Homeworld: ${homeworld.name}`,
        data2: `Species: ${species.name}`,
        data3: `Population: ${homeworld.population}`
      };
    });
    return await Promise.all(unresolvedPromises);
  }

  buildCards = data => {
    if (this.state.people.length) {
      return data.map((person, index) => (
        <Card
          type="people"
          setFavorites={this.props.setFavorites}
          selected={person}
          {...person}
          key={index}
        />
      ));
    }
  };

  render() {
    const people = this.buildCards(this.state.people);
    return <section className="people-container">{people}</section>;
  }
}

export default People;
