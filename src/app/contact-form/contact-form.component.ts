import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  requiredHintName = false;
  nameLength = false;
  requiredHintMail = false;
  emailLength = false;
  requiredHintMessage = false;
  messageLength = false;

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
    console.log('Sending Mail', this.myForm);
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    await this.disableForm(nameField, messageField, emailField, sendButton);
    await this.clearForm(nameField, messageField, emailField, sendButton);

    //Animation anzeigen fürs senden

    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('message', messageField.value);
    // formData.append('email', emailField.value);

    //senden 
    await fetch('https://edipbahcecioglu.com/send_mail.php',
      {
        method: 'POST',
        body: formData
      }
    )
    // Text anzeigen: Nachricht gesendet !
    setTimeout(() => {
      this.enableForm(nameField, messageField, emailField, sendButton);
    }, 5000);

  }

  async clearForm(nameField, messageField, emailField, sendButton) {
    nameField.value = '';
    messageField.value = '';
    emailField.value = '';
    this.setFormStyleDefault();
  }

  setFormStyleDefault() {
    this.nameLength = false;
    this.emailLength = false;
    this.messageLength = false;
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

  checkUserInput(inputfield) {
    if (inputfield == 'name') {
      this.changeVariablesNameInput();
    }

    if (inputfield == 'message') {
      this.changeVariablesMessageInput();
    }
  }

  checkUserInputMail() {
    if (this.emailField.nativeElement.value == '' || this.emailField.nativeElement.value.length == 0 || !this.emailField.nativeElement.value.includes('@')) {
      this.requiredHintMail = true;
    } else if (this.emailField.nativeElement.value.includes('@')) {
      this.requiredHintMail = false;
    }

    if (this.emailField.nativeElement.value.length > 0 && this.emailField.nativeElement.value.includes('@')) {
      this.emailLength = true;
    } else {
      this.emailLength = false;
    }
  }

  changeVariablesNameInput() {
    if (this.nameField.nativeElement.value == '' || this.nameField.nativeElement.value.length == 0) {
      this.requiredHintName = true;
    } else {
      this.requiredHintName = false;
    }

    if (this.nameField.nativeElement.value.length > 0) {
      this.nameLength = true;
    } else {
      this.nameLength = false;
    }
  }

  changeVariablesMessageInput() {
    if (this.messageField.nativeElement.value == '' || this.messageField.nativeElement.value.length == 0) {
      this.requiredHintMessage = true;
    } else {
      this.requiredHintMessage = false;
    }

    if (this.messageField.nativeElement.value.length > 0) {
      this.messageLength = true;
    } else {
      this.messageLength = false;
    }
  }
}
