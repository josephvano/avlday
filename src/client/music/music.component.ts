import { Component } from "angular2/core";

@Component({
  selector: "Music",
  template: `
  <div id="music" class="area">
    <div class="container">
      <section>
        <h2>Music</h2>
        <p>
        Since we love live music so much, we thought we would share some with you on our big day! We will have a live band at the reception and they have asked for requests. However, they may not know your favorite song so please enter your name, and song information below. We will give requests to the band as they come in so that they can learn any tunes that they haven’t already mastered
        </p>
        <iframe src="https://docs.google.com/forms/d/16KFNjMraTjUOh2V9068Vk6NeyCsvb4u7OlNibix88uY/viewform?embedded=true" width="100%" height="900px" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
      </section>
    </div>
  </div>
  `
})
export class MusicComponent{
}
