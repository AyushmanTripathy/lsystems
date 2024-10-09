import drawLSystem, { sleep } from "/draw_lsystem.js";
import systems from "/systems.js";

init();
async function init() {
  for (const system in systems) {
    console.log("Drawing " + system);
    await drawLSystem(systems[system]);
  }
}
