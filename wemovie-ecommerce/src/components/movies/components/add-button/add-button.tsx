import { ShoppingCart } from '../../../../assets';
import { Button, ButtonTitle, IconContainer } from './style';

export const AddButton = ({
  itensOnCart,
  onClick,
}: {
  itensOnCart: number;
  onClick: () => void;
}) => {
  const movieAlreadyAdded = itensOnCart > 0;

  return (
    <Button isMovieAdded={movieAlreadyAdded} onClick={onClick}>
      <IconContainer>
        <ShoppingCart />
        <span>{itensOnCart}</span>
      </IconContainer>
      <ButtonTitle>ADICIONAR AO CARRINHO</ButtonTitle>
    </Button>
  );
};
