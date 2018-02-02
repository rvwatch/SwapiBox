import React from 'react';
import './Cards.css';
function Card(props) {
  

  let { title } = props.data;
  let { data1 } = props.data;
  let { data2 } = props.data;
  let { data3 } = props.data;
  let { data4 } = props.data;


  switch (props.type) {
  
  case 'planet':
    
    data1 = `Terrain: ${data1}`;
    data2 = `Population: ${data2}`;
    data3 = `Climate: ${data3}`;
    data4 = `Residents: ${data4}`;
    break;
  case 'vehicle':
    
    data1 = `Model: ${data1}`;
    data2 = `Class: ${data2}`;
    data3 = `Passengers: ${data3}`;
    break; 
  }

  return (
    <article className="card">
      <button onClick={() => props.setFavorites(props.data)}>Favorite</button>
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
