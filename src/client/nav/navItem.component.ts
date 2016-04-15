import { Component } from "angular2/core";

@Component({
  selector: "NavItem",
  inputs: ["title", "icon"],
  styles: [require("!raw!sass?indentedSyntax!./navItem.sass")],
  template: `
  <div class="nav-item" (click)="itemClicked(evt)">
    <div class="nav-icon">
        <img src="/images/{{icon}}.png" />
    </div>
    {{title}}
  </div>
  `
})
export class NavItemComponent{
  title: string;
  icon: string;

  itemClicked(event: any){
    let value = this.title.toLowerCase();
    let target = $("#" + value);
    let $nav = $("#main-navigation");

    let height = $nav.height();
    let top = target.offset().top;

    let isOn = $nav.hasClass("affix");
    
    // magic number to account when position: fixed is on and takes
    // away height
    let buffer = isOn ? 150 : 350; 

    $("html body").animate({
      scrollTop:  top - buffer
    });

  }
}

