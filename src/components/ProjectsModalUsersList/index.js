import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';

import List from '../List';
import ListItem from '../ListItem';
import EmptyList from '../EmptyList';

import ListContainer from './index.styled';

const ProjectsModalUsersList = ({
  users, assignUserToProject, closePortal, searchQuery,
}) => (
  <React.Fragment>
    <ListContainer>
      <List
        data={users}
        noItemsMessageComponent={() => <EmptyList message="Sorry, no users to be added" />}
        renderItem={(user) => {
          const projectParsedId = parseInt(searchQuery.projectId, 0);

          if (user.name === searchQuery.user) return null;

          return (
            <ListItem
              key={user.id}
              data={user.name}
              onClick={async () => {
                await assignUserToProject(projectParsedId, {
                  role: searchQuery.role,
                  name: user.name,
                });
                closePortal();
              }}
            />
          );
        }}
      />
    </ListContainer>
  </React.Fragment>
);

ProjectsModalUsersList.propTypes = {
  users: PropTypes.instanceOf(Array).isRequired,
  assignUserToProject: PropTypes.func.isRequired,
  closePortal: PropTypes.func.isRequired,
  searchQuery: PropTypes.instanceOf(Object).isRequired,
};

export default withProps(({ location: { search } }) => ({
  searchQuery: {
    projectId: new URLSearchParams(search).get('id'),
    role: new URLSearchParams(search).get('role'),
    user: new URLSearchParams(search).get('user'),
  },
}))(ProjectsModalUsersList);
