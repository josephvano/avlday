import { Component } from "angular2/core";
import { WebLinkComponent, MapLinkComponent } from "./webLink.component";

@Component({
  selector: "Hotels",
  directives: [WebLinkComponent, MapLinkComponent],
  styles: [require("!raw!sass?indentedSyntax!./hotels.sass")],
  template: `
  <div id="hotels" class="area hotels">
    <div class="container">
      <aside>
        <img src="/images/grandbohemian.jpg" alt="Grand Bohemian" title="Grand Bohemian" />
      </aside>
      <section>
        <h2>Hotels</h2>
        <p>
          <a target="_blank" href="https://goo.gl/3SlGo3">Google Maps</a> of hotels near Winter Park Farmers Market.
        </p>
        <p>
        We have not reserved a block of rooms for our guests to stay, but we have a few suggestions with websites and google maps below. Those feeling up to an afterparty should choose one of the <a target="_blank" href="https://www.youtube.com/watch?v=JGhoLcsr8GA">Downtown</a> Orlando locations. We are unable to open our home to you, as we live nearly two hours away from all of the festivities. Feel free to call us or our local family members for further lodging suggestions.
        </p>
        <div class="hotels-list">
          <p>Hotels near downtown:</p>
          <ul>
            <li>
              <h4>Grand Bohemian</h4>
              <ul>
                <li>
                  <a class="btn btn-primary" target="_blank" href="https://goo.gl/3e06a6">Google Map
                  <span class="glyphicon glyphicon-map-marker"></span>
  </a>
                </li>
                <a class="btn btn-primary" target="_blank" href="http://www.grandbohemianhotel.com/">Website
                  <span class="glyphicon glyphicon-globe"></span>
                </a>
              </ul>
            </li>
            <li>
              <h4>Embassy Suites Downtown</h4>
              <ul>
                  <li>
                    <MapLink link="https://goo.gl/FpCFg5"></MapLink>
                  </li>
                 <li>
                  <WebLink link="http://embassysuites3.hilton.com/en/hotels/florida/embassy-suites-by-hilton-orlando-downtown-MCODTES/index.html"></WebLink>
                  </li>
              </ul>
            </li>
            <li>
              <h4>Aloft</h4> 
                <ul>
                  <li>
                    <MapLink link="https://goo.gl/WOy1u7"></MapLink>
                  </li>
                  <li>
                    <WebLink link="http://www.aloftorlandodowntown.com/"></WebLink>
                  </li>
                </ul>
              </li>
            <li>
              <h4>Crowne Plaza</h4>
              <ul>
                <li>
                  <MapLink link="https://goo.gl/F6mD1g"></MapLink>
                </li>
                <li>
                  <WebLink link="http://goo.gl/QsAqkZ"></WebLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="hotels-list">
          <p>Hotels near Farmers Market:</p>
          <ul>
            <li>
              <h4>Alfond Inn</h4>
              <ul>
                <li>
                  <MapLink link="https://goo.gl/EiZa4y"></MapLink>
                </li>
                <li>
                  <WebLink link="http://www.thealfondinn.com/"></WebLink>
                </li>
              </ul>
            </li>
            <li>
              <h4>Park Plaza Hotel</h4>
              <ul>
                <li>
                  <MapLink link="https://goo.gl/KU0RAK"></MapLink>
                </li>
                <li>
                  <WebLink link="http://parkplazahotel.com/"></WebLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
  `
})
export class HotelsComponent{
}
