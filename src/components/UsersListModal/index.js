import React from 'react';
import PropTypes from 'prop-types';

import List from '../List';
import ListItem from '../ListItem';
import EmptyList from '../EmptyList';

import ListContainer from './index.styled';

const renderUserListItem = ({
  user, roleValues, assignUserToProject, closePortal,
}) => user.name !== roleValues.user && (
<ListItem
  key={user.id}
  data={user.name}
  onClick={async () => {
    await assignUserToProject(roleValues.projectId, {
      role: roleValues.role,
      name: user.name,
    });
    closePortal();
  }}
/>
);

const UsersListModal = ({ users, ...rest }) => (
  <React.Fragment>
    <ListContainer>
      <List
        data={users}
        noItemsMessageComponent={() => <EmptyList message="Sorry, no users to be added" />}
        renderItem={user => renderUserListItem({ user, ...rest })}
      />
    </ListContainer>
  </React.Fragment>
);

UsersListModal.propTypes = {
  users: PropTypes.instanceOf(Array).isRequired,
  assignUserToProject: PropTypes.func.isRequired,
  closePortal: PropTypes.func.isRequired,
  roleValues: PropTypes.instanceOf(Object).isRequired,
};

export default UsersListModal;
