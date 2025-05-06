import React from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.card};
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.1);
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.5rem;
  margin: 0;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

const GitHubButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    background-color: ${({ theme }) => theme.primary + 'dd'};
    transform: translateY(-2px);
  }
`;

const Modal = ({ openModal, setOpenModal }) => {
  if (!openModal.state) return null;

  return (
    <ModalContainer onClick={() => setOpenModal({ state: false, project: null })}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={() => setOpenModal({ state: false, project: null })}>
          <IoMdClose />
        </CloseButton>
        <Title>{openModal.project.title}</Title>
        <Description>{openModal.project.description}</Description>
        {openModal.project.github && (
          <GitHubButton 
            href={openModal.project.github} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on GitHub
          </GitHubButton>
        )}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal; 