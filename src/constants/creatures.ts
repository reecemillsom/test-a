import { Creature, Family, Species } from "../models";

const CREATURES = [
  {
    family: Family.Swimmer,
    species: Species.Shark,
  } as Omit<Creature<Family.Swimmer>, "position" | "found">,
  {
    family: Family.Flyer,
    species: Species.Bird,
  } as Omit<Creature<Family.Flyer>, "position" | "found">,
  {
    family: Family.Runner,
    species: Species.Lion,
  } as Omit<Creature<Family.Runner>, "position" | "found">,
];

export default CREATURES;
