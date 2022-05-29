import { Image } from "./IImage";

export interface ICharacter {
  id: number;
  url: string;
  name: string;
  image: Image;
}