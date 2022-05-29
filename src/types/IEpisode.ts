import { Rating } from "./IRating";
import { Image } from "./IImage";

export interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: Image;
  name: string;
  number: number;
  rating: Rating;
  runtime: number;
  season: number;
  summary: string;
  type: string;
  url: string;
}
