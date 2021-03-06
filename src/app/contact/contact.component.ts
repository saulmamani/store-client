import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactType, Message} from '../shared/message';

import {MatDialog} from '@angular/material';
import { MapsDialogComponent } from '../maps-dialog/maps-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  message: Message;
  contactType = ContactType;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.messageForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      telnum: ['', Validators.required],
      email: ['', Validators.required],
      agree: false,
      contacttype: 'Chat',
      text: ''
    });
  }

  onSubmit() {
    this.message = this.messageForm.value;
    console.log(this.message);
    this.messageForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    // work around
    const form: HTMLFormElement = document.getElementById('form') as HTMLFormElement;
    form.reset();
  }


  openMaps() {
    this.dialog.open(MapsDialogComponent,{width: '800px', height: '450px'});
  }

}
