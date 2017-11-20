import {IMessage, Message} from './message.model';
import {User} from './user.model';

export interface IConversation {
  id: string;
  visitor: User;
  log: IMessage[];
  latestMessage: Message;
  open: boolean;
}

export class Conversation implements IConversation {
  id: string;
  visitor: User;
  log: IMessage[];
  latestMessage: Message;
  open: boolean;

  constructor(visitor: User) {
    this.id = visitor.id;
    this.visitor = visitor;
    this.log = [];
    this.latestMessage = null;
    this.open = true;
  }
}
