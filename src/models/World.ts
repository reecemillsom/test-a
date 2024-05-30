import { Creature } from "./Creature";
import { Collector } from "./Collector";
import { Family } from "./Family";

export interface World {
  area: number;
  creatures: Creature<Family>[];
  collector: Collector;
}
