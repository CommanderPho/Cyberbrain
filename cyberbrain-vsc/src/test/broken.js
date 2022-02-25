const proc = require("child_process");
const childProcess = proc.spawnSync("pdm", ["info"]);
if (childProcess.stdout.toString() == "") {
  console.log("Failed");
} else {
  console.log(childProcess.stdout.toString());
}