import React from "react";
import { styled } from "styled-components";

export default function RubyModal({ onClose }) {
  return (
    <Modal onClick={() => onClose()}>
      <ModalContent onClick={(e) => e.stopPropagation()}>ruby</ModalContent>
      <ModalContent onClick={(e) => e.stopPropagation()}>ruby</ModalContent>
      <ModalContent onClick={(e) => e.stopPropagation()}>ruby</ModalContent>
      <ModalContent onClick={(e) => e.stopPropagation()}>ruby</ModalContent>
      <ModalContent onClick={(e) => e.stopPropagation()}>ruby</ModalContent>
    </Modal>
  );
}
const Modal = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 10;
`;
const ModalContent = styled.div`
  background: #fff;
  padding: 91px;
  font-size: 25px;
  margin-right: 20px;
`;