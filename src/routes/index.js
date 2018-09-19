import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Projects from '../pages/Projects';
import ProjectsNew from '../pages/ProjectsNew';
import NotFound from '../pages/NotFound';

import Layout from '../styles/Layout.styled';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Layout.Sidebar />
      <Layout.Content>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={ProjectsNew} />
          <Route component={NotFound} />
        </Switch>
      </Layout.Content>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
