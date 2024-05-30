import { Position } from "./Position";
import { Creature } from "./Creature";
import { Family } from "./Family";

export interface Collector {
  name: string;
  position: Position;
  collection: Creature<Family>[];
}
