import Star from "../icons/star";
import { RatingContainer, RatingLabel } from "./rating.style";

interface RatingProps {
  average: number;
}

export const Rating: React.FC<RatingProps> = ({ average = 0 }) => {
  return (
    <RatingContainer data-testid={`rating-field`}>
      <Star width={18} height={18} />
      <RatingLabel>{average}</RatingLabel>
    </RatingContainer>
  );
};
