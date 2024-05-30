import { IPosition } from "./Position";
import { ICreature } from "./Creature";
import { Family } from "./Family";

export interface ICollector {
  name: string;
  position: IPosition;
  collection: ICreature<Family>[];
}
