import { Injectable } from '@angular/core';
import { Message } from './message.model';
import {Observable} from 'rxjs/Observable';
import {Conversation} from './conversation.model';
import {Visitor} from './visitor.model';

@Injectable()
export class ConversationService {

  adminId: string;
  public threads: any = {};

  constructor() { }

  private createNewVisitor(id: string): void {
    this.threads[id] = <Conversation>{
      visitor: new Visitor(id),
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
    if (this.threads.hasOwnProperty(visitorId)) {
      return this.threads[visitorId].log;
    }
  }

  public addToLog(visitorId: string, message: Message): void {
    if (!this.threads.hasOwnProperty(visitorId)) {
      this.createNewVisitor(visitorId);
    }
    this.threads[visitorId].log.push(message);
  }

  public getAllVisitors(): String[] {
    return Object.keys(this.threads);
  }

  public setLastSeen(visitorId: string): void {
    this.threads[visitorId].lastSeen = this.threads[visitorId].log.length - 1;

    console.log('last seen idx', this.threads[visitorId].lastSeen)
  }
}
