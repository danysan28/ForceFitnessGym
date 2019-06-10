import { Component, OnInit } from '@angular/core';
import { ClassServiceService } from '../../services/class-service.service';
import { modelClass } from '../../models/class';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  classListArrayGeneral: modelClass[] = [];
  classListArraySlide: modelClass[] = [];
  optionSelected: string = '0';
  viewMore: boolean = false;
  showMoreText: string = "VIEM MORE";

  constructor(private classService: ClassServiceService) { }

  ngOnInit() {
    this.fillClassesArray();
  }

  fillClassesArray(): void {
    this.classListArrayGeneral = [];
    this.classService.getClassList().snapshotChanges().subscribe(item => {
      item.map((c: any) => {
        let x = c.payload.toJSON();
        this.classListArrayGeneral.push({
          $key: c.key,
          date: x.date,
          image: x.image,
          name: x.name,
          price: x.price,
          rank: x.rank,
          reviews: x.reviews,
          schedule: x.schedule,
          sessions: x.sessions,
          trainer_name: x.trainer_name,
          trainer_photo: x.trainer_photo
        });
        
      });
      this.classListArraySlide = this.orderBy(this.optionSelected).slice(0, 3);
    });
  }

  changeSelect(): void {
    if(this.viewMore){
      this.classListArraySlide = this.orderBy(this.optionSelected);
    } else {
      this.classListArraySlide = this.orderBy(this.optionSelected).slice(0, 3);
    }    
  }

  orderBy(op: string) {
    switch (op) {
      case '0':
        this.classListArrayGeneral.sort((a, b) => {
          return a.price - b.price;
        });
        this.classListArrayGeneral.reverse();
        break;
      case '1':
        this.classListArrayGeneral.sort((a, b) => {
          return a.rank - b.rank;
        });
        break;
      case '2':
        //Order by descending date 
        this.classListArrayGeneral.sort((a, b) => {
          if (a.date > b.date) return -1;
          if (a.date < b.date) return 1;
          return 0;
        });
        break;
    }
    return this.classListArrayGeneral.reverse();
  }

  showMore(): void {
    this.viewMore = !this.viewMore;
    this.showMoreText = this.viewMore ? 'VIEW LESS' : 'VIEW MORE';
    if (this.viewMore) {      
      this.classListArraySlide = this.orderBy(this.optionSelected);      
    } else {
      this.classListArraySlide = this.orderBy(this.optionSelected).slice(0, 3);
    }
  }
}
