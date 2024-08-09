import styled from 'styled-components';

export const NavContainer = styled.nav`
  align-items: center;
  display: flex;
  height: 88px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1080px;
  padding: 24px 16px;
  width: 100%;

  @media (min-width: 1224px) {
    padding: 0;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 1.25rem;
`;

export const CartContainer = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const CartLabel = styled.nav`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  padding-right: 15px;
  font-weight: 600;

  p {
    font-size: 0.88rem;
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.grey100};
    font-size: 0.75rem;
  }
`;
