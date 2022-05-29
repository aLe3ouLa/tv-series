import { ICharacter } from "../../../types/ICharacter";
import { IPerson } from "../../../types/IPerson";
import { noImage } from "../../../utils/common";
import { CircleImage, Item } from "./cast-item.style";

interface CastItemProps {
  person: IPerson;
  character: ICharacter;
}

export const CastItem: React.FC<CastItemProps> = ({ person, character }) => {
  const image = character?.image?.medium ?? person?.image?.medium ?? noImage;

  return (
    <Item>
      <CircleImage
        width={66}
        height={66}
        alt={`${person.name} plays ${character.name}`}
        src={image}
      />
      <p>
        <strong>{character.name}</strong>
      </p>
      <p>{person.name}</p>
    </Item>
  );
};
