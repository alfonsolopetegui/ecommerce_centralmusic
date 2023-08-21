"use client"
import { styled } from "styled-components";
import ButtonSmall from "./ButtonSmall";

const Modal = ({
  modal,
  setModal,
  children,
  titulo = "Aviso!",
  showHeader,
  showOverlay,
  showCloseBtn,
}) => {
  return (
    <>
      {modal && (
        <Overlay showOverlay={showOverlay}>
          <ModalContainer>
            {showHeader && (
              <ModalHeader>
                <h3>{titulo}</h3>
              </ModalHeader>
            )}

            {showCloseBtn && (
              <CloseBtn onClick={() => setModal(!modal)}>✖️</CloseBtn>
            )}

            <Contenido>{children}</Contenido>
            <ButtonSmall texto={'Confirm'} width={'150px'}/>
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

export default Modal;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) =>
    props.showOverlay ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)"};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: 500px;
  min-height: 100px;
  position: relative;
  text-align: center;
  padding-bottom: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: 1px solid #e8e8e8;

  h3 {
    font-weight: 500;
    font-size: 1.5rem;
    color: black;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: white;
  border: none;
  width: 30px;
  height: 30px;
  font-size: 1.2rem;
  transition: all.3s ease all;
  border-radius: 5px;
  color: black;
  &:hover {
    cursor: pointer;
    background-color: #f2f2f2;
  }
`;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;

