import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.addUserForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phonenumber': new FormControl(null),
      'address': new FormControl(null),
      'city': new FormControl(null),
      'state': new FormControl(null),
      'zip': new FormControl(null),
    });
  }

  addUser() {
    this.userService.userData.push({
      'id': uuid.v4(),
      'name': this.addUserForm.value.firstname,
      'username': this.addUserForm.value.lastname,
      'email': this.addUserForm.value.email,
      'address': {
        'street': this.addUserForm.value.address,
        'suite': null,
        'city': this.addUserForm.value.city,
        'zipcode': this.addUserForm.value.zip,
        'geo': {
          'lat': null,
          'lng': null
        }
      },
      'phone': this.addUserForm.value.phonenumber,
      'website': null,
      'company': {
        'name': null,
        'catchPhrase': null,
        'bs': null
      }
    });
  }

}
