import React from 'react';
import { shallow } from 'enzyme';

import List from './index';

const setup = props => shallow(<List {...props} />);

describe('[Component] List', () => {
  it('should render the component', () => {
    const wrapper = setup({});
    expect(wrapper).toMatchSnapshot();
  });
});
