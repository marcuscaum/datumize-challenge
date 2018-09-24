import React from 'react';
import PropTypes from 'prop-types';
import { compose, lifecycle, withHandlers } from 'recompose';

import List from '../List';
import ListItem from '../ListItem';
import EmptyList from '../EmptyList';

import { ListContainer, UnassignUserButton } from './index.styled';
import handlers from './handlers';

const onClickListItem = async ({
  validateTeamMember,
  roleValues,
  closePortal,
  user,
  updateProject,
}) => {
  const newProject = validateTeamMember(roleValues.projectId, {
    role: roleValues.role,
    name: user.name,
  });

  await updateProject(roleValues.projectId, newProject);
  closePortal();
};

const renderUserListItem = ({ user, roleValues, ...rest }) => user.name !== roleValues.user && (
<ListItem
  key={user.id}
  data={user.name}
  onClick={() => onClickListItem({ roleValues, user, ...rest })}
/>
);

const UsersListModal = ({
  users, roleValues, unassignUser, ...rest
}) => (
  <React.Fragment>
    <ListContainer>
      <List
        data={users.data}
        isLoading={users.isLoading}
        noItemsMessageComponent={() => <EmptyList message="Sorry, no users to be added" />}
        renderItem={user => renderUserListItem({
          user,
          roleValues,
          ...rest,
        })
        }
      />
    </ListContainer>
    {roleValues.user && (
      <UnassignUserButton onClick={unassignUser}>Unassign user</UnassignUserButton>
    )}
  </React.Fragment>
);

UsersListModal.propTypes = {
  users: PropTypes.instanceOf(Object).isRequired,
  roleValues: PropTypes.instanceOf(Object).isRequired,
  unassignUser: PropTypes.func.isRequired,
};

export default compose(
  withHandlers({ ...handlers }),
  lifecycle({
    componentDidMount() {
      this.props.fetchUsers();
    },
  }),
)(UsersListModal);
