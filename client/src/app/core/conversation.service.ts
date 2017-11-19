import { Injectable } from '@angular/core';
import { Message } from './models/message.model';
import {Observable} from 'rxjs/Observable';
import {Conversation} from './models/conversation.model';
import {User} from './models/user.model';

@Injectable()
export class ConversationService {

  public threads: any = {};

  constructor() { }

  private createNewVisitor(id: string): void {
    this.threads[id] = <Conversation>{
      visitor: new User(id),
      log: <Message[]>[],
      latestTime: <number>null
    };
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
    this.threads[visitorId].latestTime = message.timestamp;
    console.log('set message timestap', this.threads[visitorId].visitor.alias)
  }

  public getAllVisitors(): String[] {
    const ids = Object.keys(this.threads);

    // TODO: This isn't sorting properly
    return ids.sort((a, b) => {
      const timeA = this.threads[a].latestTime;
      const timeB = this.threads[b].latestTime;

      if (timeA > timeB) {
        return 1
      }

      if (timeA < timeB) {
        return 1
      }

      return 0;
    })
  }

  public setLastSeen(visitorId: string): void {
    this.threads[visitorId].lastSeen = this.threads[visitorId].log.length - 1;

    console.log('last seen idx', this.threads[visitorId].latestTime)
  }
}
