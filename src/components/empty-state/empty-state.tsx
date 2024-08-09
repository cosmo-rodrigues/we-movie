import { EmptyStateAvatar } from '../../assets';
import { ButtonComponent } from '../common';
import { EmptyStateContainer, ImageBox, TextContainer } from './style';

export const EmptyState = ({
  buttonTile,
  buttonAction,
}: {
  buttonTile: string;
  buttonAction: () => void;
}) => {
  return (
    <EmptyStateContainer>
      <TextContainer>
        <span>Parece que&nbsp;não há </span>
        <span>nada por aqui&nbsp;:(</span>
      </TextContainer>
      <ImageBox>
        <EmptyStateAvatar />
      </ImageBox>
      <ButtonComponent
        title={buttonTile}
        onClick={buttonAction}
        hasIcon={false}
        shouldChangeColor={false}
      />
    </EmptyStateContainer>
  );
};
