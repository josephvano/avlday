import { Component } from "angular2/core";
import { WebLinkComponent, MapLinkComponent } from "../hotels/webLink.component";

@Component({
  selector: "Brunch",
  directives: [MapLinkComponent, WebLinkComponent],
  template: `
  <div class="area">
    <div class="container">
      <h2>Brunch</h2>
      <p>Join us for a send off brunch the day after the wedding hosted by the mother and father of the bride. </p>
      <p>Brunch will be from 10am - 11:30am at <a href="http://www.parisbistroparkave.com/">Paris Bistro</a> located in Winter Park.  </p>

      <MapLink link="https://goo.gl/maps/8YB1weZCjvS2"></MapLink>
      <WebLink link="http://www.parisbistroparkave.com/"></WebLink>
    </div>
  </div>
  `
})
export class BrunchComponent{
}
