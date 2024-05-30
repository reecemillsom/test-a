import Collector from "../Collector/Collector";
import Creature from "../Creature/Creature";
import { ICreature, Family, IPosition, IWorld } from "../models";

export default class World implements IWorld {
  collector: Collector;
  creatures: Creature[];
  area: number;

  constructor(
    collector: Collector,
    creatures: Omit<ICreature<Family>, "position" | "found">[],
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
    while (
      this.getCollector().collection.length !== this.getCreatures().length
    ) {
      const collectorPosition = this.getCollector().position;
      const creature = this.getCreatures().find(
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

    console.log("== TOTAL Creatures == ", this.getCreatures().length);
    console.log(
      "== TOTAL Collector Creatures ==",
      this.getCollector().collection.length,
    );
    console.log(
      "== CAUGHT THEM ALL ==",
      this.getCreatures().length === this.getCollector().collection.length,
    );
    console.log("== Creatures Collected ==", this.getCollector().collection);
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

  private generateCoordinates(): IPosition {
    return {
      x: Math.floor(Math.random() * this.area),
      y: Math.floor(Math.random() * this.area),
    };
  }
}
