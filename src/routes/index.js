import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Projects from '../pages/Projects';
import ProjectsNew from '../pages/ProjectsNew';
import NotFound from '../pages/NotFound';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/projects/:id" component={ProjectsNew} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
