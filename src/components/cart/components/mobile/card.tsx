import { MinusButton, PlusButton } from '../../../../assets';
import { Trash } from '../../../../assets/trash';
import { Currency, currencyFormatter, Language } from '../../../../helpers';
import { GroupedMovie, useCartStore } from '../../../../store';
import {
  ActionButton,
  AddOrRemoveButton,
  ButtonsContainer,
  CountInput,
  Image,
  MobileContainer,
  MovieContent,
  MovieInfo,
  PriceLabel,
  SubtotalLabel,
} from './style';

import PlaceholderImage from '/placeholder-image.webp';

export const MobileComponent = ({ movie }: { movie: GroupedMovie }) => {
  const [addToCart, removeFromCart] = useCartStore((state) => [
    state.addToCart,
    state.removeFromCart,
  ]);
  return (
    <MobileContainer>
      <Image
        loading="lazy"
        height={114}
        alt={movie.title}
        src={movie.image}
        placeholderSrc={PlaceholderImage}
      />
      <MovieContent>
        <MovieInfo>
          <p>{movie.title}</p>
          <PriceLabel>
            <span>
              {currencyFormatter(movie.price, Currency.BRL, Language.PT)}
            </span>
            <ActionButton>
              <Trash fillColor="#009EDD" />
            </ActionButton>
          </PriceLabel>
        </MovieInfo>
        <MovieInfo>
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
            <p>SUBTOTAL</p>
            <span>
              {currencyFormatter(movie.subtotal, Currency.BRL, Language.PT)}
            </span>
          </SubtotalLabel>
        </MovieInfo>
      </MovieContent>
    </MobileContainer>
  );
};
