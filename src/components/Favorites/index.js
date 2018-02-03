import React, { Component } from 'react';
import Card from '../Cards';

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
      return <section> {createFavorites} </section>;
    } else {
      return <section>
        <h1>There are no favorites!</h1>
      </section>;
    }
  }
}

export default Favorites;
