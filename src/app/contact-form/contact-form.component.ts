import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { TestScheduler } from 'rxjs/testing';

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
  nameLength = false;
  emailLength = false;
  messageLength = false;
  formCheck = false;
  mailInProgress = false;
  mailSuccess = false;

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

  async sendMail() {
    this.mailInProgress = true;
    // console.log('Sending Mail', this.myForm);
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('message', messageField.value);
    formData.append('email', emailField.value);

    await fetch('https://edipbahcecioglu.com/send_mail.php',
      {
        method: 'POST',
        body: formData
      }
    )

    await this.disableForm(nameField, messageField, emailField, sendButton);
    
    setTimeout(()=>{
      this.clearForm(nameField, messageField, emailField, sendButton);
      this.mailSuccess = true;
      this.mailInProgress = false;
      this.formCheck = false;
    }, 5000);
    setTimeout(() => {
      this.enableForm(nameField, messageField, emailField, sendButton);
      this.mailSuccess = false;
    }, 7000);

  }

  async clearForm(nameField, messageField, emailField, sendButton) {
    nameField.value = '';
    messageField.value = '';
    emailField.value = '';
  }

  async disableForm(nameField, messageField, emailField, sendButton) {
    nameField.disabled = true;
    messageField.disabled = true;
    emailField.disabled = true;
    sendButton.disabled = true;
  }

  async enableForm(nameField, messageField, emailField, sendButton) {
    nameField.disabled = false;
    messageField.disabled = false;
    emailField.disabled = false;
    sendButton.disabled = false;
  }

  checkFormsInput(){
    this.formCheck = true;
  }
}

