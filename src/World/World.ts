import Collector from "../Collector/Collector";
import Creature from "../Creature/Creature";
import type {
  Creature as ICreature,
  Position,
  World as IWorld,
} from "../models";

export default class World implements IWorld {
  collector: Collector;
  creatures: Creature[];
  area: number;

  constructor(
    collector: Collector,
    creatures: Omit<ICreature, "position" | "found">[],
    area: number,
  ) {
    this.collector = collector;
    this.area = area;

    this.creatures = creatures.map(
      ({ family, species }) =>
        new Creature(family, species, this.generateCoordinates()),
    );
  }

  public catchEmAll(): void {
    while (this.getCollector().collection.length !== this.creatures.length) {
      const collectorPosition = this.getCollector().position;
      const creature = this.creatures.find(
        (creature) =>
          Math.abs(collectorPosition.x - creature.position.x) === 1 &&
          Math.abs(collectorPosition.y - creature.position.y) === 1 &&
          !creature.getFound(),
      );

      if (creature) {
        this.collector.setCollection(creature);
        creature.setFound(true);
      }

      const x =
        collectorPosition.x + 1 === this.area + 1 ? 0 : collectorPosition.x + 1;
      const y =
        collectorPosition.x + 1 === this.area + 1
          ? collectorPosition.y + 1
          : collectorPosition.y;

      this.collector.setPosition(x, y);
    }

    console.log("FOUND THEM ALL", this.getCollector().collection);
  }

  public getCollector(): Collector {
    return this.collector;
  }

  public getCreatures(): Creature[] {
    return this.creatures;
  }

  public getArea(): number {
    return this.area;
  }

  private generateCoordinates(): Position {
    return {
      x: Math.floor(Math.random() * this.area),
      y: Math.floor(Math.random() * this.area),
    };
  }
}
