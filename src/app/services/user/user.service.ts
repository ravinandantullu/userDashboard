import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {

  userData;
  userDataSubject: any = new Subject<any>();


  constructor(private apiService: ApiService) {
    this.apiService.getUserData().subscribe((data) => {
      this.userDataSubject.next(data);
    });
  }

}
