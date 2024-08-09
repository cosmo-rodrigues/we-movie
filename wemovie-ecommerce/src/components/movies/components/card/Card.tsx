import { Currency, currencyFormatter, Language } from '../../../../helpers';
import { MovieType } from '../../../../store/movies-store';
import { ComponentProps } from '../../../../types';
import { AddButton } from '../add-button';
import { CardContainer, Image, MovieContent } from './style';

interface CardProps extends ComponentProps {
  movie: MovieType;
}
export const Card = ({ movie }: CardProps) => {
  return (
    <CardContainer>
      <MovieContent>
        <Image loading="lazy" alt={movie.title} src={movie.image} />
        <p>{movie.title}</p>
        <span>{currencyFormatter(movie.price, Currency.BRL, Language.PT)}</span>
      </MovieContent>
      <AddButton />
    </CardContainer>
  );
};
