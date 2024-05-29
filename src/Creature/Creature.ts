import type { Creature as ICreature, Family, Position, Species } from "../models";

export default class Creature implements ICreature {
    family: Family;
    species: Species;
    position: Position;
    found: boolean;

    constructor(family: Family, species: Species, position: Position) {
        this.family = family;
        this.species = species;
        this.position = position;
        this.found = false;
    }

    setFound(found: boolean): void {
        this.found = found;
    }

    getFound(): boolean {
        return this.found;
    }

    getFamily(): Family {
        return this.family;
    }

    getSpecies(): Species {
        return this.species;
    }

    getPosition(): Position {
        return this.position;
    }
}