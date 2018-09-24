import React from 'react';
import PropTypes from 'prop-types';
import { lifecycle } from 'recompose';

import List from '../List';
import ListItem from '../ListItem';
import EmptyList from '../EmptyList';

import ListContainer from './index.styled';

const renderUserListItem = ({
  user, roleValues, validateProjectTeam, closePortal, project,
}) => user.name !== roleValues.user && (
<ListItem
  key={user.id}
  data={user.name}
  onClick={async () => {
    await validateProjectTeam(roleValues.projectId, {
      role: roleValues.role,
      name: user.name,
    });
    console.lot('project', project);
    closePortal();
  }}
/>
);

const UsersListModal = ({ users, ...rest }) => (
  <ListContainer>
    <List
      data={users.data}
      isLoading={users.isLoading}
      noItemsMessageComponent={() => <EmptyList message="Sorry, no users to be added" />}
      renderItem={user => renderUserListItem({ user, ...rest })}
    />
  </ListContainer>
);

UsersListModal.propTypes = {
  users: PropTypes.instanceOf(Object).isRequired,
  validateProjectTeam: PropTypes.func.isRequired,
  closePortal: PropTypes.func.isRequired,
  roleValues: PropTypes.instanceOf(Object).isRequired,
};

export default lifecycle({
  componentWillMount() {
    this.props.fetchUsers();
  },
})(UsersListModal);
