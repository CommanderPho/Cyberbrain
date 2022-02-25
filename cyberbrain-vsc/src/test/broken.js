const { spawn, spawnSync } = require("child_process");
const childProcess = spawnSync("pdm", ["info"]);
if (childProcess.stdout.toString() == "") {
  console.log("Failed");
} else {
  console.log(childProcess.stdout.toString());
}