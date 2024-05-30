import Collector from "./Collector";
import Creature from "../Creature/Creature";
import { Family, Species } from "../models";

describe("Collector", () => {
  describe("when initialising", () => {
    let collector: Collector;
    beforeAll(() => {
      collector = new Collector("Ashe", { x: 0, y: 0 });
    });

    it("should set the properties correctly", () => {
      const name = collector.getName();
      const position = collector.getPosition();
      const collection = collector.getCollection();

      expect(name).toEqual("Ashe");
      expect(position).toEqual({ x: 0, y: 0 });
      expect(collection).toEqual([]);
    });
  });

  describe("when wanting to update players position", () => {
    let collector: Collector;

    beforeAll(() => {
      collector = new Collector("Ashe", { x: 0, y: 0 });
    });

    it("should set the coordinates appropriately", () => {
      collector.setPosition(1, 0);

      expect(collector.getPosition()).toEqual({ x: 1, y: 0 });
    });
  });

  describe("when wanting to update a players collection", () => {
    let collector: Collector;

    beforeAll(() => {
      collector = new Collector("Ashe", { x: 0, y: 0 });
    });

    it("should set the collection appropriately", () => {
      const creature = new Creature(Family.Runner, Species.Lion, {
        x: 0,
        y: 0,
      });

      collector.setCollection(creature);

      expect(collector.getCollection()).toEqual([creature]);
    });
  });
});
