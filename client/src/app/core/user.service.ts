import { Injectable } from '@angular/core';
import {User} from './models/user.model';

@Injectable()
export class UserService {

  admin: User;

  constructor() { }

  public setAdmin(id: string) {
    if (!this.admin) {
      this.admin = new User(id, 'You');
    }
  }
}
