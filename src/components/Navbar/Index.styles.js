import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.4s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const MobileMenuLinks = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateX(5px);
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;
