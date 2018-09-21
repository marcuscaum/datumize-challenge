import { connect } from 'react-redux';

import { getProjects, getRoles } from '../../redux/selectors';
import { createProject, deleteProject } from '../../redux/actions';

import ProjectsPage from '../../pages/Projects';

const mapStateToProps = state => ({
  projects: getProjects(state),
  roles: getRoles(state),
});

export default connect(
  mapStateToProps,
  { createProject, deleteProject },
)(ProjectsPage);
