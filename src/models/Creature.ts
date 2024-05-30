import { IPosition } from "./Position";
import { SpeciesMap } from "./Species";
import { Family } from "./Family";

export interface ICreature<T extends Family> {
  position: IPosition;
  family: T;
  species: SpeciesMap[T];
  found: boolean;
}
