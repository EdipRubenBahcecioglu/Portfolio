import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  scrollTo(target) {
    console.log(`scrolling to ${target}`);
    let el = document.getElementById(target);
    el.scrollIntoView({behavior: "smooth"});
  }
}
