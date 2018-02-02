import React from 'react';
import './Cards.css';
function Card({ name, homeworld, species, population }) {
  return (
    <article className="card">
      <button>Favorite</button>
      <h1>{name}</h1>
      <ul>
        <li>{homeworld}</li>
        <li>{species}</li>
        <li>{population}</li>
      </ul>
    </article>
  );
}

export default Card;
