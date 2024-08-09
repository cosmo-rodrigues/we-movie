import { ShoppingBag } from '../../assets';
import { CartContainer, CartLabel, HeaderTitle, NavContainer } from './style';

export const Header = () => {
  return (
    <NavContainer>
      <HeaderTitle>WeMovies</HeaderTitle>
      <CartContainer>
        <CartLabel>
          <p>Meu Carrinho</p>
          <span>1 item</span>
        </CartLabel>

        <ShoppingBag />
      </CartContainer>
    </NavContainer>
  );
};
