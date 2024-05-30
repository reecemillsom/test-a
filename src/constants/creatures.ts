import { ICreature, Family, Species } from "../models";

const CREATURES = [
  {
    family: Family.Swimmer,
    species: Species.Shark,
  } as Omit<ICreature<Family.Swimmer>, "position" | "found">,
  {
    family: Family.Flyer,
    species: Species.Bird,
  } as Omit<ICreature<Family.Flyer>, "position" | "found">,
  {
    family: Family.Runner,
    species: Species.Lion,
  } as Omit<ICreature<Family.Runner>, "position" | "found">,
];

export default CREATURES;
