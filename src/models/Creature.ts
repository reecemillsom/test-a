import { Position } from "./Position";
import { SpeciesMap } from "./Species";
import { Family } from "./Family";

export interface Creature<T extends Family> {
  position: Position;
  family: T;
  species: SpeciesMap[T];
  found: boolean;
}
