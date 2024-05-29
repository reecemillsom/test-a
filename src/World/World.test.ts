import { Creature as ICreature} from "../models";
import Collector from "../Collector/Collector";
import World from "./World";
import {Family, Species} from "../models";

describe('World', () => {
    describe('when instantiated', () => {
        // TODO all injected classes should be mocked.
        let world: World;
        let collector: Collector;
        let creatures: Omit<ICreature, 'position'>[];
        let area: number;

        beforeAll(() => {
            collector = new Collector('Ashe', { x: 0, y: 0 });
            creatures = [{ species: Species.Shark, family: Family.Swimmer }];
            area = 25;

            world = new World(collector, creatures, area);
        });

        it('should set the initial values correctly', () => {
            const resCreatures = world.getCreatures();
            const resArea = world.getArea();
            const resCollector = world.getCollector();

            expect(resCreatures).toEqual([{
                family: Family.Swimmer,
                species: Species.Shark,
                position: {
                    x: expect.any(Number),
                    y: expect.any(Number),
                },
                found: false
            }]);

            expect(resArea).toEqual(area);
            expect(resCollector).toEqual(collector);
        });
    });

    describe('when going to catch them all', () => {
        let world: World;
        let collector: Collector;
        let creatures: Omit<ICreature, 'position'>[];
        let area: number;

        beforeAll(() => {
            collector = new Collector('Ashe', { x: 0, y: 0 });
            creatures = [{ species: Species.Shark, family: Family.Swimmer }, { species: Species.Lion, family: Family.Runner }];
            area = 25;

            world = new World(collector, creatures, area);
        });

        it('should find all creatures within the map', () => {
            world.catchEmAll();

            expect(world.getCollector().collection.length).toEqual(creatures.length);
        });
    });
});