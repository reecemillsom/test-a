import {Position} from "./Position";
import {Creature} from "./Creature";

export interface Collector {
    name: string;
    position: Position;
    collection: Creature[];
}