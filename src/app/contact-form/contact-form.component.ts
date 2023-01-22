import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @ViewChild('myForm') myForm: ElementRef;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('messageField') messageField: ElementRef;
  @ViewChild('sendButton') sendButton: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  scrollTop(){

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth' 
    });
  }

  async sendMail(){
    console.log('Sending Mail', this.myForm);
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement
    nameField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    //Animation anzeigen fürs senden

    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('message', messageField.value);

    //senden 
    await fetch('LINK ZUR PHP MAIL AUF FTP SERVER',
      {
        method: 'POST',
        body: formData
      }
    )
      // Text anzeigen: Nachricht gesendet !
      nameField.disabled = false;
      messageField.disabled = false;
      sendButton.disabled = false;
  }
}
