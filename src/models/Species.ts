export enum Species {
  Bird = "bird",
  Shark = "Shark",
  Lion = "Lion",
}

export type SpeciesMap = {
  flyer: Species.Bird;
  swimmer: Species.Shark;
  runner: Species.Lion;
};
