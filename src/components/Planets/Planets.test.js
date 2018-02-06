import React from 'react';
import { shallow } from 'enzyme';
import Planets from './index';

describe('Planets ', () => {
  let wrapper;
  let mockPlanets;
  let mockSetFavs;
  beforeEach(() => {
    mockPlanets = [
      {
        data1: 'Homeworld: Tatooine',
        data2: 'Species: Human',
        data3: 'Population: 200000',
        favorite: true,
        title: 'Luke Skywalker'
      }
    ];
    window.fetch = jest.fn();
    mockSetFavs = jest.fn();
    wrapper = shallow(
      <Planets favorites={mockPlanets} setFavorites={mockSetFavs} />
    );
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when given two cards', () => {
    mockPlanets = [
      {
        data1: 'Homeworld: Tatooine',
        data2: 'Species: Human',
        data3: 'Population: 200000',
        favorite: true,
        title: 'Luke Skywalker'
      },
      {
        data1: 'Homeworld: Naboo',
        data2: 'Species: Droid',
        data3: 'Population: 4500000000',

        favorite: true,
        title: 'R2-D2'
      }
    ];
    expect(wrapper).toMatchSnapshot();
  });


});