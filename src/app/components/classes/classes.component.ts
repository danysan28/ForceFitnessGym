import { Component, OnInit } from '@angular/core';
import { ClassServiceService } from '../../services/class-service.service';
import { modelClass } from '../../models/class';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  classListArray: any[];

  constructor(private classService: ClassServiceService) { }

  ngOnInit() {
    this.classService.getClassList().snapshotChanges().subscribe(item => {
      this.classListArray = [];
      item.map(c => {
        let x = c.payload.toJSON();
        x['$key'] = c.key;
        this.classListArray.push(x);
      });
      this.classListArray.sort((a,b) => {
        return a.price - b.price;
      });
      // this.classListArray.reverse();
      console.log(this.classListArray);
    });
  }

}
