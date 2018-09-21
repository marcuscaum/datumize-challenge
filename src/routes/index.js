import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Projects from '../containers/Projects';
import Roles from '../containers/Roles';
import Users from '../containers/Users';
import NotFound from '../pages/NotFound';

import Layout from '../styles/Layout.styled';

const {
  Sidebar, SidebarItem, Content, SidebarLogo,
} = Layout;

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Sidebar>
        <SidebarLogo>
          <img
            src="https://www.datumize.com/hubfs/IPA-GDD-2018/Web/images/common/logo-Datumize-negativo.png?t=1537265132866"
            alt="Logo"
          />
        </SidebarLogo>
        <SidebarItem exact to="/">
          Home
        </SidebarItem>
        <SidebarItem exact to="/projects">
          Projects
        </SidebarItem>
        <SidebarItem exact to="/roles">
          Roles
        </SidebarItem>
        <SidebarItem exact to="/users">
          Users
        </SidebarItem>
      </Sidebar>
      <Content>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={Projects} />
          <Route exact path="/roles" component={Roles} />
          <Route exact path="/users" component={Users} />
          <Route component={NotFound} />
        </Switch>
      </Content>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
