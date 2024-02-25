import {Character} from "./character.model";

export interface Film{
  title: string;
  release_date: string;
  opening_crawl: string;
  director: string;
  producer: string;
  characters: string[];
  charactersList?: Character[]
}
