import styled from 'styled-components';

export const SuccessPageContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 596px;
  justify-content: center;
`;

export const TextContainer = styled.h2`
  font-size: 1.25rem;
  max-width: 200px;
  text-align: center;
  white-space: normal;

  @media (min-width: 768px) {
    max-width: 352px;
    white-space: nowrap;
  }
`;

export const ImageBox = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 265px;
  margin: 24px 0;
  width: 180px;

  @media (min-width: 768px) {
    max-width: 447px;
    width: 100%;
  }
`;
