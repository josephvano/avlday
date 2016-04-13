import {bootstrap} from "angular2/platform/browser"

import { MainComponent } from "./main/main.component";

import "./styles/global";

console.log("Application main entry");

bootstrap(MainComponent);

require("./lib/smoothScroll");
require("expose?$!jquery");
