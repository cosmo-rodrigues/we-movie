import { useNavigate } from 'react-router-dom';
import { CartComponent, EmptyState, Header } from '../../components';
import { useCartStore } from '../../store';
import { CartPageContainer } from './style';

export const CartPage = () => {
  const navigate = useNavigate();
  const cart = useCartStore((state) => state.cart);
  const hasItemsOnCart = cart.length > 0;
  return (
    <>
      <Header />
      <CartPageContainer>
        {hasItemsOnCart ? (
          <CartComponent cartItems={cart} />
        ) : (
          <EmptyState buttonTile="VOLTAR" buttonAction={() => navigate('/')} />
        )}
      </CartPageContainer>
    </>
  );
};
