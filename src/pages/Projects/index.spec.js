import React from 'react';
import { shallow } from 'enzyme';

import Projects from './index';

const setup = props => shallow(<Projects {...props} />);

describe('[Page] Projects', () => {
  it('should render the page', () => {
    const wrapper = setup({
      fetchProjects: () => jest.fn(),
      fetchRoles: () => jest.fn(),
    });
    expect(wrapper).toMatchSnapshot();
  });
});
