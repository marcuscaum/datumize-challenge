import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, lifecycle } from 'recompose';
import { notify } from 'react-notify-toast';

import List from '../../components/List';
import ListItem from '../../components/ListItem';
import RolesList from '../../components/RolesList';

import UsersListModal from '../../containers/UsersListModal';

import withModal from '../../hocs/with-modal';

import AddItemForm from '../../components/AddItemForm';

const ProjectsPage = ({
  projects, roles, createProject, deleteProject, ...rest
}) => (
  <React.Fragment>
    <AddItemForm
      placeholder="Project name"
      buttonLabel="+ NEW PROJECT"
      action={(values) => {
        const nameTaken = projects.data.some(project => values.name === project.name);
        if (nameTaken) {
          return notify.show('Name already taken!', 'error');
        }
        return createProject(values);
      }}
      fields={{
        name: 'Project name',
      }}
      schema={{
        name: '',
        team: [],
      }}
    />
    <section>
      {Boolean(projects.data.length) && <h2>Drag left to remove the item.</h2>}
      <List
        data={projects.data}
        isLoading={projects.isLoading || roles.isLoading}
        renderItem={data => (
          <ListItem
            key={data.id}
            data={data.name}
            dragAnimation
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
      this.props.fetchProjects();
      this.props.fetchRoles();
    },
  }),
  withState('roleValues', 'roleValuesHandler', {}),
  withModal({
    content: props => <UsersListModal {...props} />,
    title: 'Assign an user',
    description: 'Select a user from the list to assign to this role',
  }),
)(ProjectsPage);
