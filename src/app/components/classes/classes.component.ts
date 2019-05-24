import { Component, OnInit } from '@angular/core';
import { ClassServiceService } from '../../services/class-service.service';
import { modelClass } from '../../models/class';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  classListArray: modelClass[] = [];
  optionSelected: string = '0';
  viewMore: boolean = false;
  showMoreText: string = "VIEM MORE";

  constructor(private classService: ClassServiceService) { }

  ngOnInit() {
    this.fillClassesArray('0');
  }

  fillClassesArray(op: string): void {
    this.classListArray = [];
    this.classService.getClassList().snapshotChanges().subscribe(item => {
      item.map((c: any) => {
        let x = c.payload.toJSON();
        this.classListArray.push({
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
      switch (op) {
        case '0':
          this.classListArray.sort((a, b) => {
            return a.price - b.price;
          });
          break;
        case '1':
          this.classListArray.sort((a, b) => {
            return a.rank - b.rank;
          });
          break;
        case '2':
          //Order by descending date 
          this.classListArray.sort((a, b) => {
            if (a.date > b.date) return -1;
            if (a.date < b.date) return 1;
            return 0;
          });
          break;
      }
      if (!this.viewMore) {
        this.classListArray = this.classListArray.reverse().slice(0, 3);
      } else {
        this.classListArray.reverse();
      }
    });
  }

  changeSelect(): void {
    this.fillClassesArray(this.optionSelected);
  }

  showMore($event): void {
    $event.preventDefault();
    this.viewMore = !this.viewMore;
    this.showMoreText = this.viewMore ? 'VIEW LESS' : 'VIEW MORE';
    this.changeSelect();
  }


}
