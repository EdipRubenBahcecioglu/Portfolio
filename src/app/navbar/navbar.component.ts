import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(target) {
    console.log(`scrolling to ${target}`);
    let el = document.getElementById(target);
    el.scrollIntoView({behavior: "smooth"});
  }

}
