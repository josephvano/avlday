import { Component } from "angular2/core";

@Component({
  selector: "Registry",
  styles: [require("!raw!sass?indentedSyntax!./registry.sass")],
  template: `
  <div id="gifts" class="area">
    <div class="container">
      <h2>Gifts</h2>
      <p>You may have noticed by now that we have not registered for gifts. As we have been cohabitating for the last five years, we have just about all we need from a typical wedding registry. If you wish to present us with a gift, we currently accept cash or check. Come back soon if you wish to give a digital gift.</p>
    </div>
  </div>
 
  `
})
export class RegistryComponent{
}
