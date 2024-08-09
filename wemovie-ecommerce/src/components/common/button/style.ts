import styled from 'styled-components';

export const Button = styled.button<{
  shouldChangeColor: boolean;
  hasIcon: boolean;
}>`
  align-items: center;
  background-color: ${({ theme, shouldChangeColor }) =>
    shouldChangeColor ? theme.colors.green100 : theme.colors.blue100};
  border-radius: 4px;
  display: flex;
  gap: 12px;
  height: 40px;
  justify-content: center;
  line-height: 16px;
  max-width: ${({ hasIcon }) => (hasIcon ? '306.7px' : '173px')};
  padding: 8px;
  width: 100%;

  span,
  p {
    font-size: 0.75rem;
  }

  span {
    margin: 0 12px 0 3.4px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue200};
  }
`;

export const ButtonTitle = styled.p``;

export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 400;
  }
`;
