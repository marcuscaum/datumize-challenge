import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, lifecycle } from 'recompose';

import List from '../../components/List';
import ListItem from '../../components/ListItem';
import UsersListModal from '../../components/UsersListModal';
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
      schema={{
        name: '',
        team: [],
      }}
    />
    <section>
      <List
        data={projects.data}
        isLoading={projects.isLoading || roles.isLoading}
        renderItem={data => (
          <ListItem
            key={data.id}
            data={data.name}
            onValueChange={{
              x: (x) => {
                if (x === -200) {
                  deleteProject(data.id);
                }
              },
            }}
          >
            <RolesList roles={roles.data} projectId={data.id} projectTeam={data.team} {...rest} />
          </ListItem>
        )}
      />
    </section>
  </React.Fragment>
);

ProjectsPage.propTypes = {
  projects: PropTypes.instanceOf(Object).isRequired,
  roles: PropTypes.instanceOf(Object).isRequired,
  createProject: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
};

export default compose(
  lifecycle({
    componentDidMount() {
      // This is IF only needed cause we don't have an actually API with the saved data,
      // So we use our redux store as source of true
      if (!this.props.projects.data.length) {
        this.props.fetchProjects();
      }

      if (!this.props.roles.data.length) {
        this.props.fetchRoles();
      }

      if (!this.props.users.data.length) {
        this.props.fetchUsers();
      }
    },
  }),
  withState('roleValues', 'roleValuesHandler', {}),
  withModal({
    content: props => <UsersListModal {...props} />,
    title: 'Assign an user',
    description: 'Select a user from the list to assign to this role',
  }),
)(ProjectsPage);
