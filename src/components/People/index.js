import React, { Component } from 'react';
import { getData, apiRoot, cleanPeopleData } from '../apiCalls';
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
    const people = await cleanPeopleData(data);
    this.setState({ people });
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
