import styled from 'styled-components';

export const CartContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 596px;
  justify-content: flex-start;
  padding: 24px;
`;

export const CartHeader = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 0 auto;
  width: 100%;
`;

export const MovieCart = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  height: 114px;
  margin: 0 auto;
  padding: 0 24px;
`;
