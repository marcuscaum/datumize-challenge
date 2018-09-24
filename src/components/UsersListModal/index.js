import React from 'react';
import PropTypes from 'prop-types';
import { compose, lifecycle } from 'recompose';

import List from '../List';
import ListItem from '../ListItem';
import EmptyList from '../EmptyList';

import ListContainer from './index.styled';

const onClickListItem = async ({
  validateProjectTeam, roleValues, closePortal, user,
}) => {
  await validateProjectTeam(roleValues.projectId, {
    role: roleValues.role,
    name: user.name,
  });
  closePortal();
};

const renderUserListItem = ({ user, roleValues, ...rest }) => user.name !== roleValues.user && (
<ListItem
  key={user.id}
  data={user.name}
  onClick={() => onClickListItem({ roleValues, user, ...rest })}
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

export default compose(
  lifecycle({
    componentDidMount() {
      this.props.fetchUsers();
    },
    componentDidUpdate(prevProps) {
      if (prevProps.project.team !== this.props.project.team) {
        this.props.updateProject(this.props.project.id, this.props.project);
      }
    },
  }),
)(UsersListModal);
