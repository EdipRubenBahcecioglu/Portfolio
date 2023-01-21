import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-solo-project',
  templateUrl: './solo-project.component.html',
  styleUrls: ['./solo-project.component.scss']
})
export class SoloProjectComponent implements OnInit {

  @Input() projectname:any;
  @Input() projectLanguage:any;
  @Input() projectDescription:any;
  @Input() projectImgPath:any;
  @Input() liveTestLink:any;
  @Input() githubLink:any;
  @Input() flexDirection:any;

  constructor() { 

    console.log(this.flexDirection);
  }

  ngOnInit(): void {
  }

  openProject(projectLink) {
    window.open(projectLink);
  }

  openGithub(githubLink){
    window.open(githubLink)
  }

}
