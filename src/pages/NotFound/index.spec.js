import React from 'react';
import { shallow } from 'enzyme';

import NotFound from './index';

const setup = props => shallow(<NotFound {...props} />);

describe('[Page] NotFound', () => {
  it('should render the page', () => {
    const wrapper = setup({});
    expect(wrapper).toMatchSnapshot();
  });
});
