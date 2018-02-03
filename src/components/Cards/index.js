import React from 'react';
import './Cards.css';
function Card({title, data1, data2, data3, data4, setFavorites, selected}) {


  return (
    <article className="card">
      <button onClick={() => setFavorites({ ...selected })}>Favorite</button>
      <h1>{title}</h1>
      <ul>
        <li>{data1}</li>
        <li>{data2}</li>
        <li>{data3}</li>
        <li>{data4}</li>
      </ul>
    </article>
  );
}

export default Card;
