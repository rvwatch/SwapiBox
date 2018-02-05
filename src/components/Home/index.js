import React, { Component } from 'react';
import { getData, apiRoot, getFilmScroll } from '../apiCalls';
import './Home.css';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      filmScroll: ''
    };
  }

  async componentDidMount() {
    const data = await getData(apiRoot + 'films/');
    const { opening_crawl } = await getFilmScroll(data);
    
    this.setState({ filmScroll: opening_crawl });
  }

  render() {
    return (
      <section className="star-wars">
        <div className='fade' />
        <div className="crawl">
          <div className="title">
            <p>Episode IV</p>
            <h1>A New Hope</h1>
          </div>
          <p>{this.state.filmScroll}</p>
          
        </div>
      </section>
    );
  }
}

export default Home;
