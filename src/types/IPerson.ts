import { ICountry } from "./ICountry";
import { Image } from "./IImage";

export interface IPerson {
  id: number;
  url: string;
  name: string;
  country: ICountry;
  birthday: Date;
  deathday: Date | null;
  gender: string;
  image: Image;
}