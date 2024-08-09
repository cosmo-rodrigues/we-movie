import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';

export const DesktopContainer = styled.div`
  display: none;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  min-width: 296px;
  padding: 24px 0;
  width: 100%;

  @media (min-width: 768px) {
    display: grid;
  }
`;

export const MovieContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 280px;
`;

export const MovieInfo = styled.div`
  align-items: self-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 16px;
`;

export const Image = styled(LazyLoadImage)`
  max-width: 114px;
`;

export const AddContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 117px;
`;

export const AddOrRemoveButton = styled.button`
  align-items: center;
  text-decoration: none;
  border-radius: 100%;
  height: 18px;
  width: 18px;
`;

export const CountInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.grey50};
  border-radius: 4px;
  height: 26px;
  margin: 0 11px;
  padding: 16px 12px 16px 12px;
  width: 59px;
`;
