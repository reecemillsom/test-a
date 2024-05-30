import { Creature } from "./Creature";
import { Collector } from "./Collector";

export interface World {
  area: number;
  creatures: Creature[];
  collector: Collector;
}
