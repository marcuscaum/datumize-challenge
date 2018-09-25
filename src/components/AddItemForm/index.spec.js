import React from 'react';
import { shallow } from 'enzyme';

import AddItemForm from './index';

const setup = props => shallow(<AddItemForm {...props} />);

describe('[Component] AddItemForm', () => {
  it('should render the component', () => {
    const wrapper = setup({});
    expect(wrapper).toMatchSnapshot();
  });
});
