import { ICountry } from "./ICountry";
import { Image } from "./IImage";
import { Rating } from "./IRating";

export interface IShow {
  id: number;
  averageRuntime: number;
  ended: string;
  externals: Externals;
  genres: string[];
  image: Image;
  language: string;
  name: string;
  network: Network;
  officialSite: string;
  premiered: string;
  rating: Rating;
  runtime: number;
  schedule: Schedule;
  status: string;
  summary: string;
  type: string;
  updated: Date;
  url: string;
  webChannel: WebChannel;
}

interface WebChannel {
  id: number;
  name: string;
  country: ICountry | null;
  officialSite: string;
}

interface Schedule {
  time: string;
  days: string[];
}

interface Externals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

interface Network {
  id: number;
  name: string;
  country: object;
  officialSite: string;
}
