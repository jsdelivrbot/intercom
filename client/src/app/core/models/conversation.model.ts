import {IMessage, Message} from './message.model';
import {User} from './user.model';

export interface IConversation {
  id: string;
  visitor: User;
  log: IMessage[];
  latestMessage: Message;
}

export class Conversation implements IConversation {
  id: string;
  visitor: User;
  log: IMessage[];
  latestMessage: Message;

  constructor(visitor: User) {
    this.id = visitor.id;
    this.visitor = visitor;
    this.log = [];
    this.latestMessage = null;
  }
}
