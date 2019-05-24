import { Component, OnInit, Input } from '@angular/core';
import { modelClass } from 'src/app/models/class';

@Component({
  selector: 'app-target-class',
  templateUrl: './target-class.component.html',
  styleUrls: ['./target-class.component.scss']
})
export class TargetClassComponent implements OnInit {
  @Input() gymClass: modelClass[];
  @Input() stars: number;

  namesList: string[] = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  constructor() {
   }

  ngOnInit() {
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

  transformDate(dateClass: string){
    let d = new Date(dateClass);
    return `${this.namesList[d.getMonth()]} ${d.getDate()}.${d.getFullYear()}`;
  }

}
