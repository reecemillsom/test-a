import World from "./World/World";
import Collector from "./Collector/Collector";
import CREATURES from "./constants/creatures";

new World(new Collector("Ashe", { x: 0, y: 0 }), CREATURES, 25).catchEmAll();
