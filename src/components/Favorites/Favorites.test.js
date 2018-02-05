import React from 'react';
import { shallow } from 'enzyme';
import Favorites from './index';

describe('Favorites ', () => {
  let wrapper;
  let mockFavs;
  beforeEach(() => {
    mockFavs = [
      {
        data1: 'Terrain: ocean',
        data2: 'Population: 1000000000',
        data3: 'Climate: temperate',
        data4: 'Resident: Boba Fett,Lama Su,Taun We',
        favorite: true,
        title: 'Kamino'
      }
    ];

    wrapper = shallow(
      <Favorites favorites={mockFavs} setFavorites={mockFavs} />
    );
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when given two cards', () => {
    mockFavs = [
      {
        data1: 'Terrain: ocean',
        data2: 'Population: 1000000000',
        data3: 'Climate: temperate',
        data4: 'Resident: Boba Fett,Lama Su,Taun We',
        favorite: true,
        title: 'Kamino'
      },
      {
        data1: 'Terrain: ocean',
        data2: 'Population: 1000000000',
        data3: 'Climate: temperate',
        data4: 'Resident: Boba Fett,Lama Su,Taun We',
        favorite: true,
        title: 'Kamino'
      }
    ];
    expect(wrapper).toMatchSnapshot();
  });
});
