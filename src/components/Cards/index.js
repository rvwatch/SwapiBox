import React from 'react';
import PropTypes from 'prop-types';
import './Cards.css';

function Card({
  title,
  data1,
  data2,
  data3,
  data4,
  setFavorites,
  selected,
  fav
}) {


  return (
    <article onClick={() => setFavorites({ ...selected })} className={`card ${fav}`}>
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

Card.propTypes = {
  title: PropTypes.string,
  data1: PropTypes.string,
  data2: PropTypes.string,
  data3: PropTypes.string,
  data4: PropTypes.string,
  setFavorites: PropTypes.func,
  selected: PropTypes.object,
  fav: PropTypes.string
};


export default Card;
