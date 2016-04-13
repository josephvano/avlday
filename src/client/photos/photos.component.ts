import { Component } from "angular2/core";

class Photo{
  constructor(public num: number, public title: string, public file: string, public caption: string){
  }
}

@Component({
  selector: "Photos",
  styles: [require("!raw!sass?indentedSyntax!./photos.sass")],
  template: `
  <div id="photos" class="area">
    <div class="container">
      <h2>Photos</h2>

        <div id="carousel" class="carousel slide">
            <!-- Indicators -->
            <ol class="carousel-indicators">
              <li *ngFor="#photo of photos" data-target="#carousel" [attr.data-slide-to]="photo.num" [attr.class]="photo.num == 0 ? 'active' : ''"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">

              <div *ngFor="#photo of photos" [attr.class]="photo.num == 0 ? 'active item' : 'item'">
                <img src="/images/photos/{{photo.file}}" alt="{{photo.caption}}" />
                    <div class="carousel-caption">
                      <h3>{{photo.title}}</h3>
                      <p>{{photo.caption}}</p>
                    </div>
              </div>

            </div>

            <!-- Controls -->
            <a (click)="prev()" class="left carousel-control" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left"></span>
            </a>
            <a (click)="next()" class="right carousel-control" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right"></span>
            </a>
        </div>
    </div>
  </div>
  `
})
export class PhotosComponent{
  photos: Array<Photo> = new Array<Photo>();

  constructor(){
    this.photos.push( new Photo(0, "Emma", "0.jpg", "on the flatirons") );
    this.photos.push( new Photo(1, "Emma", "1.jpg", "Coastline Festival") );
    this.photos.push( new Photo(2, "Joey", "2.jpg", "Boulder") );
    this.photos.push( new Photo(3, "Joey / Emma", "3.jpg", "Pearl Jam 2016") );
    this.photos.push( new Photo(4, "Joey", "4.jpg", "Indialantic") );
    this.photos.push( new Photo(5, "Joey / Emma", "5.jpg", "PJ 20 at Alpine Valley") );
    this.photos.push( new Photo(6, "Joey / Emma", "6.jpg", "Jackson Hole") );
  }

  prev(){
    $("#carousel").carousel("prev");
  }

  next(){
    $("#carousel").carousel("next");
  }

  ngOnInit(){
    console.log("intializing carousel");
    $("#carousel").carousel({
      interval: 6 * 1000
    });
  }
}
