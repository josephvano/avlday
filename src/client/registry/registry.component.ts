import { Component } from "angular2/core";

@Component({
  selector: "Registry",
  styles: [require("!raw!sass?indentedSyntax!./registry.sass")],
  template: `
  <div id="gifts" class="area">
    <div class="container">
      <h2>Gifts</h2>
      <p>You may have noticed by now that we have not registered for gifts. As we have been cohabitating for the last five years, we have just about all we need from a typical wedding registry. If you wish to present us with a gift, we currently accept cash or check. Come back soon if you wish to give a digital gift.</p>
      <p>Joey has been working tirelessly to get this website up and running in time for the invitations to go out, and some minor improvements will be implemented as our big day gets closer!</p>
    </div>
  </div>
 
  `
})
export class RegistryComponent{
}
