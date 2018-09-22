import React from 'react';
import PropTypes from 'prop-types';

import List from '../../components/List';
import ListItem from '../../components/ListItem';
import UsersList from '../../components/ProjectsModalUsersList';

import withModal from '../../hocs/with-modal';

import AddItem from '../../components/AddItem';

import { RolesList, RoleItem, RoleButton } from './index.styled';

const ProjectsPage = ({
  projects, roles, createProject, deleteProject, openPortal, history,
}) => (
  <React.Fragment>
    <AddItem
      placeholder="Add new project"
      onClickSubmit={createProject}
      fields={['name']}
      dataObject={{
        name: '',
        team: [],
      }}
    />
    <section>
      <List
        data={projects}
        renderItem={data => (
          <ListItem key={data.id} data={data.name}>
            <RolesList>
              {roles.map((role) => {
                const member = data.team && data.team.find(item => item.role === role.name);
                const memberName = member && member.name;

                return (
                  <RoleItem key={role.id}>
                    <strong>{role.name}</strong>
                    <RoleButton
                      onClick={() => {
                        history.push(
                          `/projects?id=${data.id}&role=${role.name}&user=${memberName}`,
                        );
                        openPortal();
                      }}
                    >
                      {memberName || 'Unassigned'}
                    </RoleButton>
                  </RoleItem>
                );
              })}
            </RolesList>
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
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  openPortal: PropTypes.func.isRequired,
};

export default withModal({
  content: props => <UsersList {...props} />,
  title: 'Assign an user',
  description: 'Select a user from the list to assign to this role',
})(ProjectsPage);
