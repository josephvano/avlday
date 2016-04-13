import { Component } from "angular2/core";

@Component({
  selector: "Splash",
  styles: [require("!raw!sass?indentedSyntax!./splash.styles.sass")],
  template: `
  <div>
    <img src="/images/splash.jpg" class="splash" />
  </div>
  `
})
export class SplashComponent {
  constructor(){
  }
}
