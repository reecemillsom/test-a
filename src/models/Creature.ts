import {Position} from "./Position";
import {Species} from "./Species";
import {Family} from "./Family";

// TODO certain families should be restricted to certain species, e.g. if the family is a flier, I should not be able to create a Shark
export interface Creature {
    position: Position;
    species: Species;
    family: Family;
    found: boolean;
}