import { ICast } from "../../../types/ICast";
import Wrapper from "../../fragments/wrapper";
import { CastItem } from "../../fragments/cast-item/cast-item";
import { CastContainer } from "./show-cast.style";

interface Cards {
  cast: ICast[]
}

export const Cast: React.FC<Cards> = ({ cast }) => {
  return (
    <Wrapper as="section">
      <h2>Cast</h2>
      <CastContainer>
        {cast?.map((p, index) => (
            <CastItem
              key={p.character.id}
              data-testid={`cast-list-${index}`}
              person={p.person}
              character={p.character}
            />
          ))}
      </CastContainer>
    </Wrapper>
  );
};