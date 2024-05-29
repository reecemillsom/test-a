import Creature from "./Creature";
import {Family, Species, Position} from "../models";

describe('Creature', () => {
    describe('when initialising', () => {
        let creature: Creature;
        let family: Family;
        let species: Species;
        let position: Position;

        beforeAll(() => {
            family = Family.Swimmer;
            species = Species.Shark;
            position = { x: 0, y: 0 };

            creature = new Creature(family, species, position);
        });

        it('should set the properties correctly', () => {
            const resFamily = creature.getFamily();
            const resSpecies = creature.getSpecies();
            const resPosition = creature.getPosition();

            expect(resFamily).toEqual(family);
            expect(resSpecies).toEqual(species);
            expect(resPosition).toEqual(position);
        });
    });

    describe('when setting creature as found', () => {
        let creature: Creature;
        let family: Family;
        let species: Species;
        let position: Position;

        beforeAll(() => {
            family = Family.Swimmer;
            species = Species.Shark;
            position = { x: 0, y: 0 };

            creature = new Creature(family, species, position);
        })

        it('should set the found status to true', () => {
            const found = creature.getFound();

            expect(found).toEqual(false);

            creature.setFound(true);

            const updatedFound = creature.getFound();

            expect(updatedFound).toEqual(true);
        });
    });
});