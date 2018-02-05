import React from 'react';
import { shallow } from 'enzyme';
import Vehicles from './index';

describe('Vehicles ', () => {
  let wrapper;
  let mockVehicles;
  let mockSetFavs;
  beforeEach(() => {
    mockVehicles = [
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
      <Vehicles favorites={mockVehicles} setFavorites={mockSetFavs} />
    );
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when given two cards', () => {
    mockVehicles = [
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
