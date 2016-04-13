import { Component } from "angular2/core";
import { NavItemComponent } from "./navItem.component";

@Component({
  selector: "MainNav",
  directives: [NavItemComponent],
  styles: [require("!raw!sass?indentedSyntax!./nav.sass")],
  template: `
  <nav id="main-navigation">
    <ul>
      <li *ngFor="#item of items">
        <NavItem [title]="item.title" [icon]="item.icon"></NavItem>
      </li>
    </ul>
  </nav>
  `
})
export class NavComponent{
  items: any;

  constructor(){
    this.items = [];
    this.items.push({ title: "Reception", icon: "people" });
    this.items.push({ title: "Hotels", icon: "hotels" });
    this.items.push({ title: "Music", icon: "guitar" });
    this.items.push({ title: "Photos", icon: "gallery" });
    this.items.push({ title: "Gifts", icon: "gifts" });
  }

  ngOnInit(){

    $( () => {
      let $nav = $("#main-navigation");
      let offsetTop = $("#main-header").outerHeight() + $nav.outerHeight();

      $nav.affix({
        offset: {
          top: offsetTop
        }
      });
    });

  }
}
