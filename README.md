# Test A

This test was to create a Pokemon 'like' game.

## **This game had a few main entities:**

1. Collectors - 'Ashe' from Pokemon, a individual that can capture the creatures
2. Creatures - 'Pokemon', the creatures that can be caught
3. World - The idea of a world so that collectors can go around and capture the creatures.

## **The tasks of this test:**

1. Create data models for the entities, what details do they need.
2. Enable collector to move around the world in order to collect the created creatures.

## **My approach:**

1. Create the data models. Restrict species dependent on the family type. E.g. Family: Swimmer, Species: Shark, not Family: Swimmer, Species: Lion
2. Once I was happy with the models, I created classes implementing the data models, with tests written at each layer.
3. Last of all once I was happy with the Collector & Creatures class, I implemented the world and the ability for the collector to move around collecting creatures.

## Getting started 

Commands to run:

`npm i` - Install the dependencies of the project

`npm run build` - Build the project, the compiled code will be outputted to dist

`npm t` - Run the tests of the project.

`npm start` - Run the implementation, this will tell you the creatures captured and where that was.


