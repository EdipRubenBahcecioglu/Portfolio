import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openLink(link){
    window.open(link, "_blank");
  }

  openMail(emailTo){
    location.href = "mailto:"+emailTo;
  }

}
