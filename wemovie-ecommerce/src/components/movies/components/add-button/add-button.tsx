import { ShoppingCart } from '../../../../assets';
import { Button, IconContainer } from './style';

export const AddButton = () => {
  return (
    <Button>
      <IconContainer>
        <ShoppingCart />
        <span>0</span>
      </IconContainer>
      <span>ADICIONAR AO CARRINHO</span>
    </Button>
  );
};
