import { connect } from 'react-redux';

import { getProjects } from '../../redux/selectors';
import { createProject, deleteProject } from '../../redux/actions';

import ProjectsPage from '../../pages/Projects';

export default connect(
  state => ({ projects: getProjects(state) }),
  { createProject, deleteProject },
)(ProjectsPage);
