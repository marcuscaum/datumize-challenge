import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import ProjectsNew from '../Pages/ProjectsNew';
import NotFound from '../Pages/NotFound';

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
