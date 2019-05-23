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

  constructor(private classService: ClassServiceService) { }

  ngOnInit() {
    this.classService.getClassList().snapshotChanges().subscribe(item => {
      item.map((c: any) => {
        let x = c.payload.toJSON();
        this.classListArray.push({
          $key: c.key,
          date:  x.date,
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
      this.classListArray.sort((a, b) => {
        return a.price - b.price;
      });
      this.classListArray.reverse();
      console.log(this.classListArray);
    });
  }

}
