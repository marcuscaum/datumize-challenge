import React from 'react';
import PropTypes from 'prop-types';

import List from '../../components/List';
import ListItem from '../../components/ListItem';

import { RolesList, RoleItem } from './index.styled';

const ProjectsPage = ({ projects, createProject, deleteProject }) => (
  <React.Fragment>
    <header>
      <h1> Projects </h1>
    </header>
    <section>
      <List
        data={projects}
        renderItem={data => (
          <ListItem key={data.id} data={data.name}>
            <RolesList>
              <RoleItem>
                <strong>Admin: </strong>
                Unassigned
              </RoleItem>
              <RoleItem>
                <strong>Editor: </strong>
                Unassigned
              </RoleItem>
              <RoleItem>
                <strong>Viewer: </strong>
                Unassigned
              </RoleItem>
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
  createProject: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
};

export default ProjectsPage;
