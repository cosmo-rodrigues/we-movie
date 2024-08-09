import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const CardContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 324px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 338px;
  padding: 16px;
  width: 100%;

  p {
    font-size: 0.75rem;
  }
`;

export const MovieContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    margin: 8px 0;
  }
`;

export const Image = styled(LazyLoadImage)`
  max-width: 147px;
`;
