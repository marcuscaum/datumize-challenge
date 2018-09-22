import styled from 'styled-components';

const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  background: #00000070;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ModalContent = styled.div`
  display: flex;
  width: 550px;
  height: 390px;
  background: white;
  border-radius: 10px;
  flex-direction: column;
`;

const ModalHeader = styled.header`
  padding: 25px;
  position: relative;

  h1 {
    font-size: 20px;
  }

  span {
    font-size: 14px;
  }
`;

const ModalCloseButton = styled.button`
  border: 0;
  padding: 0;
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;

  &:after {
    content: 'x';
  }
`;

export default {
  Container: ModalContainer,
  Content: ModalContent,
  Header: ModalHeader,
  CloseButton: ModalCloseButton,
};
