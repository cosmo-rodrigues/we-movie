import { Link } from 'react-router-dom';
import { ShoppingBag } from '../../assets';
import { useCartStore } from '../../store/cart-store';
import { CartContainer, CartLabel, HeaderTitle, NavContainer } from './style';

export const Header = () => {
  const cartMovies = useCartStore((state) => state.cart);

  const handlePlural = () => {
    const quantityLabel = cartMovies.length != 1 ? ' itens' : ' item';

    return quantityLabel;
  };

  return (
    <NavContainer>
      <Link to="/">
        <HeaderTitle>WeMovies</HeaderTitle>
      </Link>
      <Link to="/cart">
        <CartContainer>
          <CartLabel>
            <p>Meu Carrinho</p>
            <span>
              {cartMovies.length}
              {handlePlural()}
            </span>
          </CartLabel>

          <ShoppingBag />
        </CartContainer>
      </Link>
    </NavContainer>
  );
};
