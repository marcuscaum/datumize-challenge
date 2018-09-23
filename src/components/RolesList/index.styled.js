import styled from 'styled-components';

export const RolesList = styled.div`
  display: flex;
  margin: 15px 0;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const RoleItem = styled.div`
  margin-right: 10px;
  background-color: ${({ hasMember }) => (hasMember ? '#121921' : '#f3f3f3')};
  padding: 5px 10px;
  border-radius: 5px;
  color: ${({ hasMember }) => (hasMember ? 'white' : '#004257')};

  strong {
    margin-right: 5px;

    &::after {
      content: ':';
    }
  }
`;

export const RoleButton = styled.div`
  border: 0;
  padding: 0;
  float: right;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
