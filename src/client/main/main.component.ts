import { Component } from "angular2/core";
import { HeaderComponent } from "../header/header.component";
import { NavComponent } from "../nav/nav.component";
import { ReceptionComponent } from "../reception/reception.component";
import { HotelsComponent } from "../hotels/hotels.component";
import { MusicComponent } from "../music/music.component";
import { SplashComponent } from "../splash/splash.component";
import { PhotosComponent } from "../photos/photos.component";
import { FooterComponent } from "../footer/footer.component";
import { RegistryComponent } from "../registry/registry.component";
import { BrunchComponent } from "../brunch/brunch.component";

@Component({
  selector: "Main",
  directives: [HeaderComponent, NavComponent, ReceptionComponent, HotelsComponent, MusicComponent, PhotosComponent, SplashComponent, FooterComponent, RegistryComponent, BrunchComponent],
  template: `
  <Header></Header>
  <MainNav></MainNav>
  <Splash></Splash>
  <Reception></Reception>
  <Hotels></Hotels>
  <Music></Music>
  <Photos></Photos>
  <Registry></Registry>
  <Brunch></Brunch>
  <Footer></Footer>
  `
})
export class MainComponent{
}
