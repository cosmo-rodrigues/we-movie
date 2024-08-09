import styled from 'styled-components';

export const Button = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue100};
  border-radius: 4px;
  display: flex;
  gap: 12px;
  height: 40px;
  justify-content: center;
  line-height: 16px;
  max-width: 306.7px;
  padding: 8px;
  width: 100%;

  span {
    font-size: 0.75rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue200};
  }
`;

export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 400;
  }
`;
