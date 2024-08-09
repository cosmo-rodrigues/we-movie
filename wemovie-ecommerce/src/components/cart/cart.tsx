import { Currency, currencyFormatter, Language } from '../../helpers';
import { MovieType } from '../../store';
import { ButtonComponent } from '../common';
import { CartContainer, CartHeader, MovieCart } from './style';

export const CartComponent = ({ cartItems }: { cartItems: MovieType[] }) => {
  const totalSum: number = cartItems.reduce(
    (accumulator, movie) => accumulator + movie.price,
    0
  );

  return (
    <CartContainer>
      <CartHeader>
        <p>PRODUTO</p>
        <p>QTD</p>
        <p>SUBTOTAL</p>
      </CartHeader>

      <MovieCart>
        {cartItems.map((movie) => (
          <p>{movie.title}</p>
        ))}
      </MovieCart>
      <div></div>
      <div>
        <ButtonComponent
          title="FINALIZAR PEDIDO"
          hasIcon={false}
          shouldChangeColor={false}
          onClick={() => {}}
        />

        <div>
          <p>TOTAL</p>
          <span>{currencyFormatter(totalSum, Currency.BRL, Language.PT)}</span>
        </div>
      </div>
    </CartContainer>
  );
};
