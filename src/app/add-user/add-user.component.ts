import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.addUserForm = new FormGroup({
      'firstname': new FormControl(null),
      'lastname': new FormControl(null),
      'email': new FormControl(null),
      'phonenumber': new FormControl(null),
      'address': new FormControl(null),
      'city': new FormControl(null),
      'state': new FormControl(null),
      'zip': new FormControl(null),
    });
  }

  addUser() {
    console.log(this.addUserForm);
  }

}
