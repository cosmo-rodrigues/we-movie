import { MinusButton, PlusButton } from '../../../../assets';
import { Currency, currencyFormatter, Language } from '../../../../helpers';
import { GroupedMovie, useCartStore } from '../../../../store';
import { ButtonsContainer, CountInput, SubtotalLabel } from '../mobile/style';
import {
  AddOrRemoveButton,
  DesktopContainer,
  Image,
  MovieContent,
  MovieInfo,
} from './style';

import PlaceholderImage from '/placeholder-image.webp';

export const DesktopComponent = ({ movie }: { movie: GroupedMovie }) => {
  const [addToCart, removeFromCart] = useCartStore((state) => [
    state.addToCart,
    state.removeFromCart,
  ]);

  return (
    <DesktopContainer>
      <MovieContent>
        <Image
          loading="lazy"
          height={114}
          alt={movie.title}
          src={movie.image}
          placeholderSrc={PlaceholderImage}
        />
        <MovieInfo>
          <p>{movie.title}</p>
          <span>
            {currencyFormatter(movie.price, Currency.BRL, Language.PT)}
          </span>
        </MovieInfo>
      </MovieContent>

      <ButtonsContainer>
        <AddOrRemoveButton onClick={() => removeFromCart(movie.id)}>
          <MinusButton fillColor="#009EDD" />
        </AddOrRemoveButton>
        <CountInput value={movie.quantity} />
        <AddOrRemoveButton onClick={() => addToCart(movie)}>
          <PlusButton fillColor="#009EDD" />
        </AddOrRemoveButton>
      </ButtonsContainer>

      <SubtotalLabel>
        <span>
          {currencyFormatter(movie.subtotal, Currency.BRL, Language.PT)}
        </span>
      </SubtotalLabel>
    </DesktopContainer>
  );
};
