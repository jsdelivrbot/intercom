import { Injectable } from '@angular/core';
import { Message } from './models/message.model';
import {Observable} from 'rxjs/Observable';
import {Conversation} from './models/conversation.model';
import {User} from './models/user.model';
import {UserService} from './user.service';

@Injectable()
export class ConversationService {

  private conversations: Conversation[] = [];

  constructor(private userService: UserService) { }

  private createConversation(id: string): Conversation {
    const newVisitor = new User(id);
    const newConvo = new Conversation(newVisitor);
    this.conversations.push(newConvo);
    return newConvo;
  }

  public getAllConversations(): Conversation[] {
    return this.conversations;
  }

  public getConversation(id: string): Conversation {
    const found = this.conversations.filter((c) => {
      return c.id === id;
    });
    return found.length > 0 ? found[0] : null;
  }

  public addNewMessage(id: string, message: Message): void {
    // Find the relevant conversation the message should belong to
    let conv = this.getConversation(id);
    if (conv === null) {
      conv = this.createConversation(id);
    }

    // Update the message with the relevant user alias
    message.userAlias = (message.userId === id) ? conv.visitor.alias : this.userService.admin.alias;

    // Add the message to the conversation
    conv.log.push(message);
    conv.latestMessage = message;
  }

  public endConversation(id: string): void {
    const conv = this.getConversation(id);
    if (conv) {
      conv.open = false;
    }
  }
}
