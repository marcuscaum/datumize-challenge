import styled from 'styled-components';

const Sidebar = styled.div`
  flex: 0 0 365px;
  min-height: 100vh;
  background-color: #004257;
`;

const Content = styled.div`
  flex: 1;
  flex-direction: column;
  background-color: #e6ebed;
  padding: 25px;
`;

export default {
  Sidebar,
  Content,
};
