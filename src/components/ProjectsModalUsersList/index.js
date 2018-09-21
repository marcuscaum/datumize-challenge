import React from 'react';
import PropTypes from 'prop-types';

import List from '../List';
import ListItem from '../ListItem';

import ListContainer from './index.styled';

const ProjectsModalUsersList = ({ users }) => (
  <React.Fragment>
    <ListContainer>
      <List data={users} renderItem={data => <ListItem key={data.id} data={data.name} />} />
    </ListContainer>
  </React.Fragment>
);

ProjectsModalUsersList.propTypes = {
  users: PropTypes.instanceOf(Array).isRequired,
};

export default ProjectsModalUsersList;
