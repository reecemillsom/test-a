import {
  Collector as ICollector,
  Creature as ICreature,
  Family,
  Position,
} from "../models";

export default class Collector implements ICollector {
  name: string;
  position: Position;
  collection: ICreature<Family>[];

  constructor(name: string, position: Position) {
    this.name = name;
    this.position = position;
    this.collection = [];
  }

  public setPosition(x: number, y: number): void {
    this.position.x = x;
    this.position.y = y;
  }

  public setCollection(creature: ICreature<Family>): void {
    this.collection.push(creature);
  }

  public getName(): string {
    return this.name;
  }

  public getPosition(): Position {
    return this.position;
  }

  public getCollection(): ICreature<Family>[] {
    return this.collection;
  }
}
