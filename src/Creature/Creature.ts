import type { ICreature, Family, IPosition, Species } from "../models";

export default class Creature implements ICreature<Family> {
  family: Family;
  species: Species;
  position: IPosition;
  found: boolean;

  constructor(family: Family, species: Species, position: IPosition) {
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

  getPosition(): IPosition {
    return this.position;
  }
}
