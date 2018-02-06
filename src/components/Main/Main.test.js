import React from 'react';
import { shallow } from 'enzyme';
import Main from './index';

describe('Main ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Main />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

});