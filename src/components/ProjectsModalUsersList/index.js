import React from 'react';
import PropTypes from 'prop-types';

import List from '../List';
import ListItem from '../ListItem';

const ProjectsModalUsersList = ({ users }) => (
  <List data={users} renderItem={data => <ListItem key={data.id} data={data.name} />} />
);

ProjectsModalUsersList.propTypes = {
  users: PropTypes.instanceOf(Array).isRequired,
};

export default ProjectsModalUsersList;
