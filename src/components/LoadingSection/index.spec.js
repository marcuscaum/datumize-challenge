import React from 'react';
import { shallow } from 'enzyme';

import LoadingSection from './index';

const setup = props => shallow(<LoadingSection {...props} />);

describe('[Component] LoadingSection', () => {
  it('should render the component', () => {
    const wrapper = setup({});
    expect(wrapper).toMatchSnapshot();
  });
});
