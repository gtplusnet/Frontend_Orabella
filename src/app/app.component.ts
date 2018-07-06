import { Component } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}

@Component({
  selector: 'sample',
  template: `
    <ngx-carousel
        [inputs]="carouselOne"
        (carouselLoad)="myfunc($event)">
          <ngx-item NgxCarouselItem>
            ....
          </ngx-item>
          <ngx-item NgxCarouselItem>
            ....
          </ngx-item>
          <ngx-item NgxCarouselItem>
            ....
          </ngx-item>
          <button NgxCarouselPrev class='leftRs'>&lt;</button>
          <button NgxCarouselNext class='rightRs'>&gt;</button>
    </ngx-carousel>
  `,
})
export class SampleComponent implements OnInit {

  public carouselOne: NgxCarousel;

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }

  public myfunc(event: Event) {
     // carouselLoad will trigger this funnction when your load value reaches
     // it is helps to load the data by parts to increase the performance of the app
     // must use feature to all carousel
  }


}
