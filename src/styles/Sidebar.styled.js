import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Sidebar = styled.div`
  flex: 0 0 365px;
  min-height: 100vh;
  background-color: #004257;
  flex-direction: column;
  box-sizing: border-box;
  padding: 25px;
`;

export const SidebarItem = styled(NavLink)`
  color: #e6ebed;
  font-weight: 600;
  font-size: 18px;
  box-sizing: border-box;
  text-decoration: none;
  padding: 20px;
  display: flex;
  border-radius: 5px;

  &.active {
    background-color: #54bdd0;
  }
`;

export const SidebarLogo = styled.div`
  padding: 60px;
  box-sizing: border-box;
`;
