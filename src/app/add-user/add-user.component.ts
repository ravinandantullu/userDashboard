import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phonenumber': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'state': new FormControl(null, Validators.required),
      'zip': new FormControl(null, Validators.required),
    });
  }

  addUser() {
    console.log(this.addUserForm);
  }

}
