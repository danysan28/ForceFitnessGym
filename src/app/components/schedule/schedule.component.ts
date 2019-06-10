import { Component, OnInit } from '@angular/core';
import { ClassServiceService } from '../../services/class-service.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  scheduleListArray: any[];
  outputArray: any[];
  selectedDate: string = '';
  todayDate: Date = new Date();
  panelSelected: string = '';
  weekDays: string[] = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSEDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];

  constructor(private classService: ClassServiceService) {
    this.selectedDate = this.todayDate.getFullYear() + '-W' + this.getWeekNr();
  }

  ngOnInit() {
    this.fillScheduleArray(this.selectedDate);
  }

  fillScheduleArray(selectedWeek: string) {
    this.outputArray = [new Array(7), new Array(7), new Array(7), new Array(7), new Array(7), new Array(7), new Array(7)];
    this.scheduleListArray = new Array(7);
    this.classService.getScheduleList().snapshotChanges().subscribe(root => {
      let week = root.find(element => {
        return element.key == selectedWeek;
      });
      if (week) {
        let weekObj = week.payload.toJSON();
        for (let day in weekObj) {
          let dayObj = weekObj[day];
          let x: any[] = new Array(7);
          for (let item in dayObj) {
            x[item] = dayObj[item];
          }
          this.scheduleListArray[day] = x;
        }
      }
      for (let i = 0; i < this.scheduleListArray.length; i++) {
        if (!this.scheduleListArray[i]) {
          this.scheduleListArray[i] = new Array(7);
        }
      }
      for (let i = 0; i < this.scheduleListArray.length; i++) {
        let itemSchedule = this.scheduleListArray[i];
        if (!itemSchedule) {
          this.outputArray[i] = new Array(7);
        } else {
          for (let j = 0; j < itemSchedule.length; j++) {
            let x = itemSchedule[j];
            if (x) {
              this.outputArray[j][i] = x;
            }
          }
        }
      }
    });
  }

  onChangeDate() {
    if (!this.selectedDate) {
      this.selectedDate = this.todayDate.getFullYear() + '-W' + this.getWeekNr();
    }
    this.fillScheduleArray(this.selectedDate);
  }

  getWeekNr() {
    let today = new Date();
    let Year = this.takeYear(today);
    let Month = today.getMonth();
    let Day = today.getDate();
    let now = Date.UTC(Year, Month, Day + 1, 0, 0, 0);
    let Firstday = new Date();
    Firstday.setFullYear(Year);
    Firstday.setMonth(0);
    Firstday.setDate(1);
    let then = Date.UTC(Year, 0, 1, 0, 0, 0);
    let Compensation = Firstday.getDay();
    if (Compensation > 3) {
      Compensation -= 4;
    }
    else {
      Compensation += 3;
    }
    let NumberOfWeek = Math.round((((now - then) / 86400000) + Compensation) / 7);
    return NumberOfWeek;
  }

  takeYear(theDate) {
    let x = theDate.getYear();
    let y = x % 100;
    y += (y < 38) ? 2000 : 1900;
    return y;
  }

  showPanel(accordionSlide: string) {
    if (accordionSlide === this.panelSelected) {
      this.panelSelected = '';
    } else {
      this.panelSelected = accordionSlide;
    }
  }

}
