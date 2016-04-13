import { Component } from "angular2/core";

@Component({
  selector: "Footer",
  styles: [require("!raw!sass?indentedSyntax!./footer.sass")],
  template: `
  <footer>
    <div class="container">
      <div class="profile">
        <img src="{{gravatar}}" alt="Joseph Vano" title="Joseph Vano" />
        <div class="details">
          <ul>
            <li>
              Created by Joey Vano
            </li>
            <li>
              <strong>email</strong> joseph[at]vano[dot]io
            </li>
            <li>
              <strong>profile</strong> <a href="vano.io">vano.io</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="icons">
        Menu icons made by <a target="_blank" href="http://www.freepik.com" title="Freepik">Freepik</a> from <a target="_blank" href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a target="_blank" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
      </div>
    </div>
  </footer>
  `
})
export class FooterComponent{
  gravatar: string;

  constructor(){
    this.gravatar = "http://www.gravatar.com/avatar/bc144f2c6800f27a4973dbffa7b1dcd4";
  }
}
