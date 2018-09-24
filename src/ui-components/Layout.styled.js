import styled from 'styled-components';

import { Sidebar, SidebarItem, SidebarLogo } from './Sidebar.styled';

const Content = styled.div`
  flex: 1;
  flex-direction: column;
  background-color: #e6ebed;
  padding: 25px;
  overflow-x: hidden;
`;

export default {
  Sidebar,
  SidebarItem,
  SidebarLogo,
  Content,
};
