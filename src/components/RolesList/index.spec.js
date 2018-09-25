import React from 'react';
import { shallow } from 'enzyme';

import RolesList from './index';

const setup = props => shallow(<RolesList {...props} />);

describe('[Component] RolesList', () => {
  it('should render the component', () => {
    const wrapper = setup({
      roles: [],
      projectTeam: [],
      projectId: 1,
    });
    expect(wrapper).toMatchSnapshot();
  });
});
