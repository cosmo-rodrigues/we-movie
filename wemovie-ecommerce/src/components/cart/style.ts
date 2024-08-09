import styled from 'styled-components';

export const CartContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 293px;
  padding: 24px;
`;

export const CartHeader = styled.div`
  color: ${({ theme }) => theme.colors.grey100};
  display: none;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  font-size: 0.88rem;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 768px) {
    display: grid;
  }
`;

export const MovieCart = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  width: 100%;
`;

export const Separator = styled.div`
  height: 1.36px;
  border-bottom: 1.36px solid ${({ theme }) => theme.colors.grey100};
  margin: 21px 0;
  width: 100%;

  @media (min-width: 768px) {
    margin: 0;
    margin-bottom: 24px;
  }
`;

export const CartFooter = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 34px;
  justify-content: space-between;
  width: 100%;

  button {
    max-width: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    text-align: left;

    button {
      max-width: 173px;
    }
  }
`;

export const FooterAmount = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 26px 0;
  width: 100%;

  p {
    color: ${({ theme }) => theme.colors.grey100};
  }

  span {
    font-size: 1.7rem;
    padding: 0;
    text-align: center;

    @media (min-width: 768px) {
      text-align: left;
    }
  }

  @media (min-width: 768px) {
    max-width: 197px;
    padding: 0;
  }
`;
