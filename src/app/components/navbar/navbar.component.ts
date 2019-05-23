import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  itemsNav = [
    { href: "#home", name: "HOME" },
    { href: "#classes", name: "CLASSES" },
    { href: "#schedule", name: "SCHEDULE" },
    { href: "#feedback", name: "FEEDBACK" },
  ];

  selectedItem: string = "HOME";

  constructor() { }

  ngOnInit() {
  }

  selected(item: string): void{
    console.log('click');
    this.selectedItem = item;
  }
}
