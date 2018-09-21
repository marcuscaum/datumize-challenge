import React from 'react';
import PropTypes from 'prop-types';
import _some from 'lodash.some';
import { withProps } from 'recompose';

import List from '../List';
import ListItem from '../ListItem';
import EmptyList from '../EmptyList';

import ListContainer from './index.styled';

const ProjectsModalUsersList = ({
  projects,
  users,
  assignUserToProject,
  projectId,
  role,
  closePortal,
}) => (
  <React.Fragment>
    <ListContainer>
      <List
        data={users}
        noItemsMessageComponent={() => <EmptyList message="Sorry, no users to be added" />}
        renderItem={(data) => {
          const parsedId = parseInt(projectId, 0);
          const project = projects.find(item => item.id === parsedId);

          if (_some(project.team, { user: data.name })) return null;

          return (
            <ListItem
              key={data.id}
              data={data.name}
              onClick={async () => {
                await assignUserToProject(parsedId, { role, user: data.name });
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
  projects: PropTypes.instanceOf(Array).isRequired,
  assignUserToProject: PropTypes.func.isRequired,
  projectId: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  closePortal: PropTypes.func.isRequired,
};

export default withProps(({ location: { search } }) => ({
  projectId: new URLSearchParams(search).get('id'),
  role: new URLSearchParams(search).get('role'),
}))(ProjectsModalUsersList);
