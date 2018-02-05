import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getData, apiRoot, cleanPeopleData } from '../apiCalls';
import Card from '../Cards';
import './People.css';

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

  buildCards = (data) => {
    if (this.state.people.length) {
      return data.map((person, index) => {
        
        
        // const fav = favNames.includes(person.title) ? 'fav' : '';
        return <Card
          type="people"
          setFavorites={this.props.setFavorites}
          // fav={fav}
          selected={person}
          {...person}
          key={index}
        />;
        
      });
    }
  };

  render() {
    // const favNames = this.props.favorites.map(fav => fav.name);
    const people = this.buildCards(this.state.people);
    return <section className="people-container">{people}</section>;
  }
}


People.propTypes = {
  setFavorites: PropTypes.func,
  favorites: PropTypes.array
};

export default People;
