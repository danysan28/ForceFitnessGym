import { Component, OnInit } from '@angular/core';
import { ClassServiceService } from '../../services/class-service.service';
import { modelClass } from '../../models/class';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  classListArray: modelClass[];

  constructor(private classService: ClassServiceService) { }

  ngOnInit() {
    this.classService.getClassList().snapshotChanges().subscribe(item => {
      console.log(item);
      item.forEach(element => {
        // this.classListArray.push(element.payload.toJSON());
      });
    });
  }

}
