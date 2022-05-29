import { GenreList, GenreItem, GenreLabel } from "./genre.style";

interface GenreProps {
  genres: string[]
}

export const Genres: React.FC<GenreProps> = ({ genres }) => {
  return (
    <GenreList>
      {genres.map((genre, index) => (
        <GenreItem key={index} data-testid={`genre-list`}>
          <GenreLabel>{genre}</GenreLabel>
        </GenreItem>
      ))}
    </GenreList>
  );
};