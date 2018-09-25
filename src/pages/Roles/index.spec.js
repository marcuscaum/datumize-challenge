import React from 'react';
import { shallow } from 'enzyme';

import Roles from './index';

const setup = props => shallow(<Roles {...props} />);

describe('[Page] Roles', () => {
  it('should render the page', () => {
    const wrapper = setup({
      roles: {
        data: [],
      },
      createRole: () => jest.fn(),
      deleteRole: () => jest.fn(),
      fetchRoles: () => jest.fn(),
    });
    expect(wrapper).toMatchSnapshot();
  });
});
