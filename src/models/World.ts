import { ICreature } from "./Creature";
import { ICollector } from "./Collector";
import { Family } from "./Family";

export interface IWorld {
  area: number;
  creatures: ICreature<Family>[];
  collector: ICollector;
}
