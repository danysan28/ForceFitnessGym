import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { ClassServiceService } from '../../services/class-service.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  feedbackList: any[];

  constructor(private classService: ClassServiceService, private config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree 
    this.startPromise();  
  }

  ngOnInit() {
    this.configCarousel();
  }

  startPromise() {
    let p = new Promise((resolve, reject) => {
      if (!this.feedbackList) {
        this.fillFeedbackArray();
        resolve('Success');
      } else {
        reject('Error');
      }
    });

    p.then((message) => { 
      console.log(message);
    }).catch((message) => {
      console.log(message);
    });
  }

  fillFeedbackArray() {    
    // console.log( this.classService.getFeedbacks().snapshotChanges());
    this.classService.getFeedbacks().snapshotChanges().subscribe(item => {
      this.feedbackList = [];
      item.map((c: any) => {
        let x = c.payload.toJSON();
        this.feedbackList.push(x);
      });
    });
  }

  configCarousel() {
    this.config.interval = 3000;
    // this.config.pauseOnHover = false;
    this.config.showNavigationArrows = false;
    this.config.showNavigationIndicators = false;    
  }

}
