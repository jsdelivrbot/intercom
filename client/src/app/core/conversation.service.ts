import { Injectable } from '@angular/core';
import { IMessage } from './message.model';
import {Observable} from 'rxjs/Observable';
import {Conversation} from './conversation.model';

@Injectable()
export class ConversationService {

  adminId: string;
  private visitors: any = {};

  constructor() { }

  private createNewVisitor(id: string): void {
    this.visitors[id] = <Conversation>{
      log: <IMessage[]>[],
      lastSeen: <number>null
    };
  }

  public setAdminId(id: string): void {
    if (!this.adminId) {
      this.adminId = id;
    }
  }

  public getLog(visitorId: string): IMessage[] {
    if (this.visitors.hasOwnProperty(visitorId)) {
      return this.visitors[visitorId].log;
    }
  }

  public addToLog(visitorId: string, message: IMessage): void {
    if (!this.visitors.hasOwnProperty(visitorId)) {
      this.createNewVisitor(visitorId);
    }
    this.visitors[visitorId].log.push(message);
  }

  public getAllVisitors(): String[] {
    return Object.keys(this.visitors);
  }

  public setLastSeen(visitorId: string): void {
    this.visitors[visitorId].lastSeen = this.visitors[visitorId].log.length - 1;

    console.log('last seen idx', this.visitors[visitorId].lastSeen)
  }
}
