// Polyfills
import "core-js";

require("zone.js/dist/zone");

if("production" === process.env.ENV){

  const ngCore = require("angular2/core");
  ngCore.enableProdMode();

} else {

  console.log("DEVELOPMENT MODE");

  Error["stackTraceLimit"] = Infinity;
  require("zone.js/dist/long-stack-trace-zone");
}

