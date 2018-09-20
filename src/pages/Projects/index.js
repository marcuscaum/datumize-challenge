import React from 'react';
import PropTypes from 'prop-types';

import List from '../../components/List';
import ListItem from '../../components/ListItem';

const ProjectsPage = ({ projects }) => (
  <React.Fragment>
    <header>
      <h1> Projects </h1>
    </header>
    <section>
      <List data={projects} renderItem={data => <ListItem key={data.id} name={data.name} />} />
    </section>
  </React.Fragment>
);

ProjectsPage.propTypes = {
  projects: PropTypes.instanceOf(Array).isRequired,
};

export default ProjectsPage;
