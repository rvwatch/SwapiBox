import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';


describe('Home ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an empty filmScroll state', () => {
    expect(wrapper.state().filmScroll).toEqual('');
  });

});