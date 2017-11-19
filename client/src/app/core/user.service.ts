import { Injectable } from '@angular/core';
import {User} from './models/user.model';

@Injectable()
export class UserService {

  admin: User;
  allVisitors: User[] = [];

  constructor() { }

  setAdmin(id: string) {
    if (!this.admin) {
      this.admin = new User(id, 'You');
      console.log('admin is', this.admin)
    }
  }

  addVisitor(visitor: User): void {
    this.allVisitors.push(visitor);
  }

}
