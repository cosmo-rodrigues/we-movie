import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';

export const MobileContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-width: 296px;
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MovieContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 92px;
  width: 100%;
`;

export const MovieInfo = styled.div`
  align-items: self-start;
  display: flex;
  justify-content: space-between;
  min-height: 38px;
  padding-left: 16px;
`;

export const Image = styled(LazyLoadImage)`
  max-width: 114px;
`;

export const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 117px;
`;

export const AddOrRemoveButton = styled.button`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.blue100};
  border-radius: 100%;
  color: ${({ theme }) => theme.colors.blue100};
  display: flex;
  height: 18px;
  justify-content: center;
  text-decoration: none;
  width: 18px;
`;

export const CountInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.grey50};
  border-radius: 4px;
  font-size: 0.88rem;
  font-weight: 400;
  height: 26px;
  margin: 0 11px;
  padding: 16px 12px 16px 12px;
  text-align: center;
  width: 59px;

  // Remove Arrows/Spinners
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const PriceLabel = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubtotalLabel = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  p {
    color: ${({ theme }) => theme.colors.grey100};
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    justify-content: center;
  }
`;

export const ActionButton = styled.div`
  padding-left: 16px;
`;
