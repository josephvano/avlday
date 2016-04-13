import { Component } from "angular2/core";

@Component({
  selector: "Reception",
  styles: [require("!raw!sass?indentedSyntax!./reception.sass")],
  template: `
  <div id="reception" class="area reception">
    <div class="container">
      <section>
        <h2>
          Reception
        </h2>
        <p>We will hold a brief ceremony at 5:30pm at the <a target="_blank" href="https://www.google.com/maps/place/Winter+Park+Farmers%27+Market/@28.5956838,-81.3544392,17z/data=!3m1!4b1!4m2!3m1!1s0x88e77010220762ef:0xfa0717093f3b4f5b">Winter Park Farmer’s Market</a> followed immediately by cocktail hour with Hors d'Oeuvres, then dinner and dancing.</p>
        <p>Attire is <a target="_blank" href="http://lmgtfy.com/?q=Dressy+Casual+Wedding+Attire">dressy casual</a>, and as your save the date boldly states, drinks are on us! Bring your appetite and dancing shoes, we’re going to have a great time!</p>
      </section>
      <aside>
        <div class="address">
          <h3>The Farmers Market</h3>
          200 West New England Ave<br />
          Winter Park, Florida
          <p>
            <a target="_blank" href="https://goo.gl/maps/c8gZZR81AnT2">Google Maps</a>
          </p>
        </div>
        <img class="img-circle showcase" alt="Winter Park Farmers Market" src="images/farmersmarket.jpg" />
      </aside>
    </div>
  </div>
  `
})
export class ReceptionComponent{
}
