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
  @ViewChild('emailField') emailField: ElementRef;
  requiredHintName = false;
  nameLength = false;
  requiredHintMail = false;
  emailLength = false;
  requiredHintMessage = false;
  messageLength = false;

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
    let sendButton = this.sendButton.nativeElement;
    nameField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    //Animation anzeigen fürs senden

    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('message', messageField.value);

    //senden 
    await fetch('https://edipbahcecioglu.com/edipbahcecioglu.com/send_mail.php',
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

  ///// HIER PASSIERT NUR DAS GLEICHE !! LÖSUNG FINDEN !!
  checkUserInputName(){
    if(this.nameField.nativeElement.value == '' || this.nameField.nativeElement.value.length == 0){
      this.requiredHintName = true;
    } else {
      this.requiredHintName = false;
    }

    if(this.nameField.nativeElement.value.length > 0){
      this.nameLength = true;
    } else {
      this.nameLength = false;
    }
  }

  checkUserInputMail(){
    if(this.emailField.nativeElement.value == '' || this.emailField.nativeElement.value.length == 0){
      this.requiredHintMail = true;
    } else {
      this.requiredHintMail = false;
    }

    if(this.emailField.nativeElement.value.length > 0){
      this.emailLength = true;
    } else {
      this.emailLength = false;
    }
  }

  checkUserText(){
    if(this.messageField.nativeElement.value == '' || this.messageField.nativeElement.value.length == 0){
      this.requiredHintMessage = true;
    } else {
      this.requiredHintMessage = false;
    }

    if(this.messageField.nativeElement.value.length > 0){
      this.messageLength = true;
    } else {
      this.messageLength = false;
    }
  }
}
