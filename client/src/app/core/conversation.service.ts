import { Injectable } from '@angular/core';
import { Message } from './models/message.model';
import {Observable} from 'rxjs/Observable';
import {Conversation} from './models/conversation.model';
import {User} from './models/user.model';

@Injectable()
export class ConversationService {

  private conversations: Conversation[] = [];

  constructor() { }

  public getAllConversations(): Conversation[] {
    return this.conversations;
  }

  private createConversation(id: string): Conversation {
    const newConvo = new Conversation(id);
    this.conversations.push(newConvo);
    return newConvo;
  }

  public getConversation(id: string): Conversation {
    const found = this.conversations.filter((c) => {
      return c.id === id;
    });
    return found.length > 0 ? found[0] : null;
  }

  public addToLog(id: string, message: Message): void {
    let currConvo = this.getConversation(id);
    if (currConvo === null) {
      currConvo = this.createConversation(id)
    }

    currConvo.log.push(message);
    currConvo.latestTime = message.timestamp;
    console.log(message.timestamp);
    console.log('set message timestamp', currConvo.visitor.alias, currConvo.latestTime = message.timestamp)
  }
}
