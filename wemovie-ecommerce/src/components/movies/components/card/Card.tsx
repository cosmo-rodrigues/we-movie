import { ShoppingCart } from '../../../../assets';
import { Currency, currencyFormatter, Language } from '../../../../helpers';
import { MovieType, useCartStore } from '../../../../store';
import { ComponentProps } from '../../../../types';
import { ButtonComponent } from '../../../common';
import { CardContainer, Image, MovieContent } from './style';
import PlaceholderImage from '/placeholder-image.webp';

interface CardProps extends ComponentProps {
  movie: MovieType;
}
export const Card = ({ movie }: CardProps) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);

  const getSingleMovieAmountOnCart = (id: number) => {
    const movieFound = cart.filter((movie) => movie.id === id);

    return movieFound.length;
  };

  return (
    <CardContainer>
      <MovieContent>
        <Image
          loading="lazy"
          width={147}
          height={188}
          alt={movie.title}
          src={movie.image}
          placeholderSrc={PlaceholderImage}
        />
        <p>{movie.title}</p>
        <span>{currencyFormatter(movie.price, Currency.BRL, Language.PT)}</span>
      </MovieContent>
      <ButtonComponent
        hasIcon
        onClick={() => addToCart(movie)}
        shouldChangeColor={getSingleMovieAmountOnCart(movie.id) > 0}
        title="ADICIONAR AO CARRINHO"
        icon={<ShoppingCart />}
        itemsCount={getSingleMovieAmountOnCart(movie.id)}
      />
    </CardContainer>
  );
};
