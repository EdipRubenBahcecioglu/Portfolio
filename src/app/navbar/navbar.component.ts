import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showResNavbar = false;


  constructor() { }

  ngOnInit(): void {
  }

  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  scrollTo(target) {
    console.log(`scrolling to ${target}`);
    let el = document.getElementById(target);
    el.scrollIntoView({ behavior: "smooth" });
  }

  controllNavbar() {
    this.showResNavbar = !this.showResNavbar; 
  }
}
