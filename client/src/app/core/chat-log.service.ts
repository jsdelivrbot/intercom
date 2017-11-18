import { Injectable } from '@angular/core';
import { Message } from './message.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ChatLogService {

  adminId: string;
  private logs: any = {};

  constructor() { }

  private createNewVisitor(id: string): void {
    this.logs[id] = <Message[]>[];
  }

  public setAdminId(id: string): void {
    if (!this.adminId) {
      this.adminId = id;
    }
  }

  public getLog(id: string): Observable<Message[]> {
    // return this.logs[id];
    return Observable.create((observer) => {
      if (this.logs.hasOwnProperty(id)) {
        observer.next(this.logs[id]);
      }
    });
  }

  public addToLog(visitorId: string, message: Message): void {
    if (!this.logs.hasOwnProperty(visitorId)) {
      this.createNewVisitor(visitorId);
    }
    this.logs[visitorId].push(message);
  }

  public getAllVisitors(): String[] {
    return Object.keys(this.logs);
  }
}
