import {Creature as ICreature, Family, Species} from "../models";
import Collector from "../Collector/Collector";
import Creature from "../Creature/Creature"
import World from "./World";

jest.mock('../Creature/Creature');

const mockOneSetup = (mock: ICreature) => {
      (Creature as jest.MockedClass<typeof Creature>).mockImplementation(() => (mock as any))
};

const mockMultipleSetup = (mocks: ICreature[]) => {
    const creatureMock  = Creature as jest.MockedClass<typeof Creature>;

    for (const mock of mocks) {
        creatureMock.mockImplementationOnce(() => mock as any)
    }
}

describe('World', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('when instantiated', () => {
        let world: World;
        let collector: Collector;
        let creatures: Omit<ICreature, 'position' | 'found'>[];
        let area: number;

        beforeAll(() => {
            mockOneSetup({ family: Family.Swimmer, species: Species.Shark, position: { x: 12, y: 2 }, found: false });

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
                    x: 12,
                    y: 2,
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
        let creatures: Omit<ICreature, 'position' | 'found'>[];
        let area: number;

        beforeAll(() => {
            const getFoundMock = () => {
                return jest.fn().mockReturnValueOnce(false).mockReturnValue(true)
            }

            mockMultipleSetup([
                { species: Species.Shark, family: Family.Swimmer, position: { x: 2, y: 5 }, getFound: getFoundMock(), setFound: jest.fn() },
                { species: Species.Lion, family: Family.Runner, position: { x: 4, y: 25 }, getFound: getFoundMock(), setFound: jest.fn() }
            ] as any);

            collector = new Collector('Ashe', { x: 0, y: 0 });
            creatures = [{ species: Species.Shark, family: Family.Swimmer }, { species: Species.Lion, family: Family.Runner }];
            area = 25;

            world = new World(collector, creatures, area);
        });

        it('should find all creatures within the map', () => {
            world.catchEmAll();

            const collection = world.getCollector().collection;

            expect(collection.length).toEqual(creatures.length);
            expect(collection[0]).toEqual(
                expect.objectContaining({
                    species: Species.Shark,
                    family: Family.Swimmer,
                    position: { x: 2, y: 5 },
                })
            );
            expect(collection[1]).toEqual(
                expect.objectContaining({
                    species: Species.Lion,
                    family: Family.Runner,
                    position: { x: 4, y: 25 },
                })
            )
        });
    });
});