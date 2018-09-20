import React from 'react';

import List from '../../components/List';
import ListItem from '../../components/ListItem';

const projects = [
  { id: 1, name: 'Trip to space' },
  { id: 2, name: 'Assembly Ikea furniture' },
  { id: 3, name: 'Datumize Zentral' },
];

const Projects = () => (
  <React.Fragment>
    <header>
      <h1> Projects </h1>
    </header>
    <section>
      <List data={projects} renderItem={data => <ListItem key={data.id} name={data.name} />} />
    </section>
  </React.Fragment>
);

export default Projects;
