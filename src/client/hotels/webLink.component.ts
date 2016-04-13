import { Component } from "angular2/core";

@Component({
  selector: "MapLink",
  inputs: ['link'],
  template: `
  <a class="btn btn-primary" target="_blank" href="{{link}}">Google Map
    <span class="glyphicon glyphicon-map-marker"></span>
  </a>
  `
})
export class MapLinkComponent{
}

@Component({
  selector: "WebLink",
  inputs: ['link'],
  template: `
  <a class="btn btn-primary" target="_blank" href="{{link}}">Website
    <span class="glyphicon glyphicon-globe"></span>
  </a>
  `
})
export class WebLinkComponent{
}
