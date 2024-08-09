import { SuccessPageAvatar } from '../../assets';
import { ButtonComponent } from '../common';
import { SuccessPageContainer, ImageBox, TextContainer } from './style';

export const SuccessPageComponent = ({
  buttonTile,
  buttonAction,
}: {
  buttonTile: string;
  buttonAction: () => void;
}) => {
  return (
    <SuccessPageContainer>
      <TextContainer>
        <span>Compra&nbsp;realizada </span>
        <span>com&nbsp;sucesso!</span>
      </TextContainer>
      <ImageBox>
        <SuccessPageAvatar />
      </ImageBox>
      <ButtonComponent
        title={buttonTile}
        onClick={buttonAction}
        hasIcon={false}
        shouldChangeColor={false}
      />
    </SuccessPageContainer>
  );
};
