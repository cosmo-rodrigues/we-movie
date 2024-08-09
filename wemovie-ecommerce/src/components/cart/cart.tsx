import { Currency, currencyFormatter, Language } from '../../helpers';
import { groupedMovies } from '../../helpers/grouped-movies';
import { GroupedMovie, MovieType } from '../../store';
import { ButtonComponent } from '../common';
import { DesktopComponent, MobileComponent } from './components';
import {
  CartContainer,
  CartFooter,
  CartHeader,
  FooterAmount,
  MovieCart,
  Separator,
} from './style';

export const CartComponent = ({ cartItems }: { cartItems: GroupedMovie[] }) => {
  const totalSum: number = cartItems.reduce(
    (accumulator, movie) => accumulator + movie.price,
    0
  );

  const totalByMovie = groupedMovies(cartItems);

  return (
    <CartContainer>
      <CartHeader>
        <p>PRODUTO</p>
        <p>QTD</p>
        <p>SUBTOTAL</p>
      </CartHeader>

      <MovieCart>
        {totalByMovie.map((movie) => {
          return (
            <>
              <MobileComponent movie={movie} key={movie.id} />
              <DesktopComponent movie={movie} key={movie.id} />
            </>
          );
        })}
      </MovieCart>
      <Separator />
      <CartFooter>
        <FooterAmount>
          <p>TOTAL</p>
          <span>{currencyFormatter(totalSum, Currency.BRL, Language.PT)}</span>
        </FooterAmount>

        <ButtonComponent
          title="FINALIZAR PEDIDO"
          hasIcon={false}
          shouldChangeColor={false}
          onClick={() => {}}
        />
      </CartFooter>
    </CartContainer>
  );
};
