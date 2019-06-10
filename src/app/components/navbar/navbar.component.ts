import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  itemsNav = [
    { href: "#home", name: "HOME" },
    { href: "#classes", name: "CLASSES" },
    { href: "#schedule", name: "SCHEDULE" },
    { href: "#feedback", name: "FEEDBACK" },
  ];

  currentSection = 'home';

  onSectionChange(sectionId: string) {
    console.log(sectionId);
    this.currentSection = sectionId;
  }

  // scrollTo(section) {
  //   this.currentSection = section;
  //   document.querySelector('#' + section).scrollIntoView();
  // }
  
}