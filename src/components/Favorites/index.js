import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Cards';
import './Favorites.css';

class Favorites extends Component {
  constructor() {
    super();

    this.state = {
      favorites: []
    };
  }

  buildCards = data => {
    if (this.props.favorites) {
      return data.map((fav, index) => (
        <Card
          type="favorites"
          setFavorites={this.props.setFavorites}
          selected={fav}
          {...fav}
          key={index}
        />
      ));
    }
  };

  render() {
    
    
    const createFavorites = this.buildCards(this.props.favorites);

    if (this.props.favorites.length) {
      return <section className='favorites-container'> {createFavorites} </section>;
    } else {
      return <section className='favorites-container'>
        <h1 className='no-favs-message'>GO ADD SOME FAVORITES!</h1>
      </section>;
    }
  }
}

Favorites.propTypes = {
  setFavorites: PropTypes.object,
  favorites: PropTypes.array
};

export default Favorites;
