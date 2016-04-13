import { Component } from "angular2/core";

let styles = require("!raw!sass?indentedSyntax!./header.inline.sass");

@Component({
  selector: 'Header',
  styles: [styles],
  template: `
  <header id="main-header">
    <h1>lavey / vano</h1>
    <div class="lead">
      Saturday June 11th, 2016
    </div>
  </header>
  `
})
export class HeaderComponent{
}

