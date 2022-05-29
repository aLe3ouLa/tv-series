import { ICharacter } from "./ICharacter";
import { IPerson } from "./IPerson";

export interface ICast {
  character: ICharacter;
  person: IPerson;
  self: boolean;
  voice: boolean;
}