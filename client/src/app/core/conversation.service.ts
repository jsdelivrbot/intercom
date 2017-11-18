import { Injectable } from '@angular/core';
import { Message } from './message.model';
import {Observable} from 'rxjs/Observable';
import {Conversation} from './conversation.model';

@Injectable()
export class ConversationService {

  adminId: string;
  private visitors: any = {};

  constructor() { }

  private createNewVisitor(id: string): void {
    this.visitors[id] = <Conversation>{
      log: <Message[]>[],
      lastSeen: <number>null
    };
  }

  public setAdminId(id: string): void {
    if (!this.adminId) {
      this.adminId = id;
    }
  }

  public getLog(visitorId: string): Message[] {
    if (this.visitors.hasOwnProperty(visitorId)) {
      return this.visitors[visitorId].log;
    }

    // return Observable.create((observer) => {
    //   if (this.logs.hasOwnProperty(id)) {
    //     observer.next(this.logs[id]);
    //   }
    // });
  }

  public addToLog(visitorId: string, message: Message): void {
    if (!this.visitors.hasOwnProperty(visitorId)) {
      this.createNewVisitor(visitorId);
    }
    this.visitors[visitorId].log.push(message);
  }

  public getAllVisitors(): String[] {
    return Object.keys(this.visitors);
  }
}
