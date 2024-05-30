import { Creature, Family, Species } from "../models";

// TODO once typings are fixes and changes made, then, add more creatures.
const CREATURES: Omit<Creature, "position" | "found ">[] = [
  {
    family: Family.Swimmer,
    species: Species.Shark,
  },
  {
    family: Family.Flyer,
    species: Species.Bird,
  },
  {
    family: Family.Runner,
    species: Species.Lion,
  },
];

export default CREATURES;
