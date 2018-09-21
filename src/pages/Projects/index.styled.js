import styled from 'styled-components';

export const RolesList = styled.div`
  display: flex;
  margin: 15px 0;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const RoleItem = styled.div`
  margin-right: 10px;
  background-color: #f3f3f3;
  padding: 5px 10px;
  border-radius: 5px;

  strong {
    text-transform: capitalize;
    margin-right: 5px;

    &::after {
      content: ':';
    }
  }
`;
