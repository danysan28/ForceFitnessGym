import { Component, OnInit } from '@angular/core';
import { ClassServiceService } from '../../services/class-service.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  scheduleListArray: any[];

  constructor(private classService: ClassServiceService) { }

  ngOnInit() {
    this.fillArray('2019-W21');
  }

  fillArray(selectedWeek: string) {
    this.scheduleListArray = [];
    this.classService.getScheduleList().snapshotChanges().subscribe(root => {
      let week = root.find(element => {
        return element.key == selectedWeek;
      });
      let weekObj = week.payload.toJSON();
      for (let day in weekObj) {
        let dayObj = weekObj[day];
        let x = [];
        for(let item in dayObj){
          x[item] = dayObj[item];
          
        }
        console.log(x);
        this.scheduleListArray[day] = x;       
      }
      console.log(this.scheduleListArray);
    });
  }

}
