import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-target-class',
  templateUrl: './target-class.component.html',
  styleUrls: ['./target-class.component.scss']
})
export class TargetClassComponent implements OnInit {
  @Input() gymClass: any;

  constructor() { }

  ngOnInit() {
  }

}
