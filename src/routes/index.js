import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Notifications from 'react-notify-toast';

import Projects from '../containers/Projects';
import Roles from '../containers/Roles';
import Users from '../containers/Users';
import NotFound from '../pages/NotFound';

import Layout from '../ui-components/Layout.styled';

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
        <Notifications />
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/projects" />} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/roles" component={Roles} />
          <Route exact path="/users" component={Users} />
          <Route component={NotFound} />
        </Switch>
      </Content>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
