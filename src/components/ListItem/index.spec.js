import React from 'react';
import { shallow } from 'enzyme';

import ListItem from './index';

const setup = props => shallow(<ListItem {...props} />);

describe('[Component] ListItem', () => {
  it('should render the component', () => {
    const wrapper = setup({
      data: 'Tests',
    });
    expect(wrapper).toMatchSnapshot();
  });
});
