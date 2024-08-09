import styled from 'styled-components';

export const HeroContainer = styled.main`
  padding: 0 16px;

  @media (min-width: 1224px) {
    padding: 0;
  }
`;

export const CardsContainer = styled.main`
  margin: 0 auto;
  display: grid;
  gap: 2rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1224px) {
    padding: 0;
  }
`;
