import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState } from 'recompose';

import List from '../../components/List';
import ListItem from '../../components/ListItem';
import UsersList from '../../components/UsersListModal';
import RolesList from '../../components/RolesList';

import withModal from '../../hocs/with-modal';

import AddItemForm from '../../components/AddItemForm';

const ProjectsPage = ({
  projects, roles, createProject, deleteProject, ...rest
}) => (
  <React.Fragment>
    <AddItemForm
      placeholder="Project name"
      buttonLabel="+ NEW PROJECT"
      action={createProject}
      fields={{
        name: 'Project name',
      }}
      dataObject={{
        name: '',
        xunda: '',
        team: [],
      }}
    />
    <section>
      <List
        data={projects}
        renderItem={data => (
          <ListItem key={data.id} data={data.name}>
            <RolesList roles={roles} projectId={data.id} projectTeam={data.team} {...rest} />
          </ListItem>
        )}
      />
      <button type="button" onClick={() => createProject({ name: 'Test' })}>
        Add Project
      </button>
      <button type="button" onClick={() => deleteProject(2)}>
        Delete Project
      </button>
    </section>
  </React.Fragment>
);

ProjectsPage.propTypes = {
  projects: PropTypes.instanceOf(Array).isRequired,
  roles: PropTypes.instanceOf(Array).isRequired,
  createProject: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
};

export default compose(
  withState('roleValues', 'roleValuesHandler', {}),
  withModal({
    content: props => <UsersList {...props} />,
    title: 'Assign an user',
    description: 'Select a user from the list to assign to this role',
  }),
)(ProjectsPage);
