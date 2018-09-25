import React from 'react';
import { shallow } from 'enzyme';

import EmptyList from './index';

const setup = props => shallow(<EmptyList {...props} />);

describe('[Component] EmptyList', () => {
  it('should render the component', () => {
    const wrapper = setup({
      message: 'Empty list',
    });
    expect(wrapper).toMatchSnapshot();
  });
});
